var g = {
        656: (A) => {},
        3: (A) => {},
        75: (A, I, g) => {
            Object.defineProperty(I, '__esModule', { value: !0 }), (I.AudioFilterNode = void 0);
            let C = g(376),
                Q = g(406),
                B = g(761),
                E = g(608),
                D = g(862),
                x = g(967);
            class i extends AudioWorkletNode {
                constructor(A, I, g, i) {
                    let o = A.sampleRate,
                        a = (0, E.getModelName)(o),
                        h = {
                            ...I,
                            sampleRate: o,
                            modelName: a,
                            modelPath: (0, E.sanitizeModelPath)(I.models[a]),
                            sharedBuffers: I.useSharedArrayBuffer ? (0, Q.createSharedBuffers)({ sampleRate: o }) : void 0
                        };
                    super(A, B.WORKLET_PROCESSOR_NAME, { processorOptions: h }), (this.params = I), (this.isReady = !1), (this.enabled = !1), (this.wasmParams = h), this.debugLogs && h.sharedBuffers && x.Logger.info('AudioFilterNode:constructor', "SharedArrayBuffer's has been initialized");
                    try {
                        g && this.addEventListener('ready', g),
                            i && this.addEventListener('dispose', i),
                            this.debugLogs && x.Logger.info('AudioFilterNode:constructor', 'creating web worker (type: module)'),
                            (this.worker = new C.KWebWorker(D.WORKER_URL, { type: 'module' })),
                            this.debugLogs && x.Logger.info('AudioFilterNode:constructor', 'adding event listener for worker'),
                            this.worker.addEventListener('message', this._onWasmWorkerMessage.bind(this)),
                            this.debugLogs && (x.Logger.info('AudioFilterNode:constructor', 'Connecting with other threads for logging'), x.Logger.collectFrom(this.worker, h), x.Logger.collectFrom(this.port, h)),
                            this.debugLogs && x.Logger.info('AudioFilterNode:constructor', 'Send init WASM processor event'),
                            this.worker.postMessage(
                                {
                                    event: 'INIT_WASM_PROCESSOR',
                                    data: this.wasmParams
                                },
                                this.params.useSharedArrayBuffer ? [] : [this.port]
                            );
                    } catch (A) {
                        throw (this.debugLogs && x.Logger.error('AudioFilterNode:constructor', A), Error('WORKER_NOT_SUPPORTED'));
                    }
                    this.debugLogs && this.startSecondsCounter(A);
                }
                get debugLogs() {
                    return this.params.debugLogs;
                }
                _onWasmWorkerMessage(A) {
                    let { event: I, data: g } = A.data;
                    switch (I) {
                        case 'WASM_PROCESSOR_INITIALIZED':
                            this.debugLogs && x.Logger.info('AudioFilterNode:_onWasmWorkerMessage', 'WASM processor initialized'),
                                (this.isReady = !0),
                                this.dispatchEvent(new MessageEvent('ready')),
                                this.postMessage({
                                    event: 'SET_AUDIO_PROCESSOR_READY',
                                    data: g
                                });
                            break;
                        case 'BUFFER_OVERFLOW':
                            this.debugLogs && x.Logger.info('AudioFilterNode:_onWasmWorkerMessage', 'Buffer overflown:', JSON.stringify(g)), this.dispatchEvent(new MessageEvent('buffer_overflow', { data: g }));
                    }
                }
                postMessage(A, I) {
                    let g = this.params.useSharedArrayBuffer ? this.port : this.worker;
                    I ? g.postMessage(A, I) : g.postMessage(A);
                }
                checkReadiness(A) {
                    if ((this.debugLogs && x.Logger.info('AudioFilterNode:checkReadiness', JSON.stringify({ isReady: this.isReady })), !A)) throw Error('WASM_OR_WORKER_NOT_READY');
                }
                isEnabled() {
                    return this.debugLogs && x.Logger.info('AudioFilterNode:isEnabled', JSON.stringify({ isEnabled: this.enabled })), this.enabled;
                }
                enable() {
                    this.checkReadiness(this.isReady),
                        this.debugLogs && x.Logger.info('AudioFilterNode:enable', 'send enable NC message'),
                        (this.enabled = !0),
                        this.postMessage({
                            event: 'TOGGLE',
                            data: !0
                        });
                }
                disable() {
                    this.checkReadiness(this.isReady),
                        this.debugLogs && x.Logger.info('AudioFilterNode:disable', 'send disable NC message'),
                        (this.enabled = !1),
                        this.postMessage({
                            event: 'TOGGLE',
                            data: !1
                        });
                }
                toggle() {
                    this.checkReadiness(this.isReady),
                        this.debugLogs && x.Logger.info('AudioFilterNode:toggle', 'send toggle NC message'),
                        (this.enabled = !this.enabled),
                        this.postMessage({
                            event: 'TOGGLE',
                            data: void 0
                        });
                }
                dispose() {
                    try {
                        this.debugLogs && x.Logger.info('AudioFilterNode:dispose', 'disposing Krisp filter'),
                            this.postMessage({
                                event: 'SUSPEND',
                                data: void 0
                            }),
                            this.worker.removeEventListener('message', this._onWasmWorkerMessage.bind(this)),
                            this.worker.terminate(),
                            this.dispatchEvent(new MessageEvent('dispose')),
                            clearInterval(this.secondsCounterInterval);
                    } catch (A) {
                        this.debugLogs && x.Logger.error('AudioFilterNode:dispose', A);
                    }
                }
                startSecondsCounter(A) {
                    let I = 0;
                    this.secondsCounterInterval = setInterval(() => {
                        I++,
                            this.parameters.get('seconds').setValueAtTime(I, 0),
                            x.Logger.info(
                                'AudioFilterNode:interval',
                                JSON.stringify({
                                    seconds: I,
                                    baseLatency: A.baseLatency,
                                    outputLatency: A.outputLatency
                                })
                            );
                    }, 1000);
                }
            }
            I.AudioFilterNode = i;
        },
        67: (A, I, g) => {
            Object.defineProperty(I, '__esModule', { value: !0 }), (I.DebugRecorder = void 0);
            let C = g(687);
            I.DebugRecorder = class {
                constructor(A) {
                    (this.sampleRate = A), (this._inputData = []), (this._outputData = []);
                }
                pushInput(A) {
                    this._inputData.push(A);
                }
                pushOutput(A) {
                    this._outputData.push(A);
                }
                exportToWavBlob() {
                    return {
                        input: (0, C.createWAVBlob)(this._inputData, this.sampleRate),
                        output: (0, C.createWAVBlob)(this._outputData, this.sampleRate)
                    };
                }
            };
        },
        376: (A, I) => {
            Object.defineProperty(I, '__esModule', { value: !0 }), (I.KWebWorker = void 0);
            class g extends Worker {
                constructor(A, I) {
                    super(A, I);
                }
                postMessage(A, I) {
                    I ? super.postMessage(A, I) : super.postMessage(A);
                }
            }
            I.KWebWorker = g;
        },
        24: (A, I, g) => {
            Object.defineProperty(I, '__esModule', { value: !0 }), (I.createDebugWidget = void 0);
            let C = g(967),
                Q = 'krisp-debug-widget';
            (I.createDebugWidget = function () {
                if (document.querySelector(Q)) return;
                let A = document.createElement(Q);
                document.body.appendChild(A);
            }),
                customElements.define(
                    Q,
                    class extends HTMLElement {
                        constructor() {
                            super();
                            let A = document.createElement('template');
                            (A.innerHTML = '\n      <style>\n      * {\n        color: #131032;\n      }\n\n      .krisp-widget {\n        display: block;\n        width: 200px;\n        border: 1px solid #aaa;\n        border-radius: 5px;\n        background-color: #e4e7ea;\n      }\n\n      .krisp-widget .krisp-header {\n        border-bottom: 1px solid #aaa;\n        padding: 10px;\n        cursor: move;\n      }\n\n      .krisp-widget .krisp-content {\n        padding: 10px;\n      }\n\n      button {\n        height: 32px;\n        font-size: 14px;\n        line-height: 28px;\n        padding: 0 18px;\n        border-radius: 4px;\n        border: 1px solid #614efa;\n        color: #614efa;\n\n      }\n\n      button:hover {\n        background-color: #5544dc;\n        border-color: #5544dc;\n        cursor: pointer;\n        color: #fff;\n      }\n\n      </style>\n      <div class="krisp-widget">\n        <div class="krisp-header">\n          <b>Krisp</b> is in debug mode\n        </div>\n        <div class="krisp-content">\n          <button>Download Log Report</button>\n        </div>\n      </div>\n    '), this.attachShadow({ mode: 'open' }), this.shadowRoot?.appendChild(A.content.cloneNode(!0));
                        }
                        connectedCallback() {
                            let A = 0,
                                I = 0,
                                g = 0,
                                Q = 0;
                            (this.style.position = 'absolute'),
                                (this.style.top = '10px'),
                                (this.style.right = '10px'),
                                (this.onmousedown = (C) => {
                                    (g = C.clientX),
                                        (Q = C.clientY),
                                        (document.onmouseup = () => {
                                            (document.onmouseup = null), (document.onmousemove = null);
                                        }),
                                        (document.onmousemove = (C) => {
                                            C.preventDefault(), (A = g - C.clientX), (I = Q - C.clientY), (g = C.clientX), (Q = C.clientY), (this.style.top = this.offsetTop - I + 'px'), (this.style.left = this.offsetLeft - A + 'px');
                                        });
                                }),
                                this.shadowRoot?.querySelector('button')?.addEventListener('click', () => C.Logger.downloadReport());
                        }
                    }
                );
        },
        967: (A, I, g) => {
            Object.defineProperty(I, '__esModule', { value: !0 }), (I.Logger = void 0);
            let C = g(687),
                Q = g(67);
            I.Logger = new (class {
                constructor() {
                    (this.logs = ''), (this.threadName = 'main'), (this.instances = []), (this.debugLogs = !1);
                    let A = 'main';
                    'undefined' != typeof WorkerGlobalScope ? (A = 'worker') : 'undefined' != typeof AudioWorkletProcessor && (A = 'worklet'), (this.threadName = A);
                }
                setOptions(A = !1) {
                    this.debugLogs = A;
                }
                setLoggingPort(A) {
                    this.logPort = A;
                }
                info(...A) {
                    this.debugLogs && (this.postLog('I', A.join('\t')), console.info('KrispSDK -', ...A));
                }
                warn(...A) {
                    this.debugLogs && (this.postLog('W', A.join('\t')), console.info('KrispSDK -', ...A));
                }
                error(...A) {
                    this.debugLogs && (this.postLog('E', A.join('\t')), console.error('KrispSDK -', ...A));
                }
                log(...A) {
                    this.debugLogs && (this.postLog('I', A.join('\t')), console.log('KrispSDK -', ...A));
                }
                logAudioInputSamples(A) {
                    this.logAudio('LOG_INPUT_AUDIO', A);
                }
                logAudioOutputSamples(A) {
                    this.logAudio('LOG_OUTPUT_AUDIO', A);
                }
                collectFrom(A, I) {
                    let g = {
                        channel: new MessageChannel(),
                        recorder: void 0,
                        startedAt: new Date(),
                        options: I
                    };
                    A instanceof MessagePort && (g.recorder = new Q.DebugRecorder(I.sampleRate)),
                        A instanceof Window
                            ? (this.logPort = g.channel.port2)
                            : A.postMessage(
                                  {
                                      event: 'SET_LOGGING_PORT',
                                      data: void 0
                                  },
                                  [g.channel.port2]
                              ),
                        g.channel.port1.addEventListener('message', (A) => {
                            'string' == typeof A.data ? (this.logs += A.data) : g.recorder && 'LOG_INPUT_AUDIO' === A.data?.event ? g.recorder.pushInput(A.data.data) : g.recorder && 'LOG_OUTPUT_AUDIO' === A.data?.event && g.recorder.pushOutput(A.data.data);
                        }),
                        this.instances.push(g),
                        g.channel.port1.start();
                }
                async downloadReport() {
                    try {
                        let A = [];
                        for (let I in this.instances) {
                            let g = this.instances[I];
                            if (g.recorder) {
                                let { input: Q, output: B } = g.recorder.exportToWavBlob();
                                A.push(`
            <p>Recording: ${g.startedAt}<p>
            <audio controls title="recording-input-${I}"><source src="${await (0, C.blobToBase64)(Q)}">Input</audio>
            <audio controls title="recording-output-${I}"><source src="${await (0, C.blobToBase64)(B)}">Output</audio>
          `);
                            }
                        }
                        let I = `
        <div>${A}</div>
        <details>
          <summary>Logs</summary>
          <pre>${this.logs}</pre>
        </details>
      `;
                        return (0, C.downloadBlob)(`report-${new Date().toISOString()}.html`, new Blob([I], { type: 'text/html' })), !0;
                    } catch (A) {
                        return console.error('KrispSDK - unable to download the report!'), !1;
                    }
                }
                logAudio(A, I) {
                    if (this.debugLogs && this.logPort) {
                        let g = new Float32Array(I.length);
                        g.set(I, 0),
                            this.logPort.postMessage(
                                {
                                    event: A,
                                    data: g
                                },
                                [g.buffer]
                            );
                    }
                }
                postLog(A, I) {
                    let g = `[${new Date().toLocaleString()}][${this.threadName}][${A}]: ${I}
`;
                    if (!this.logPort) return console.error('KrispSDK -', 'Logger is not initialized', g);
                    this.logPort.postMessage(g);
                }
            })();
        },
        785: (A, I, g) => {
            Object.defineProperty(I, '__esModule', { value: !0 }), (I.SharedRingBuffer = void 0);
            let C = g(967),
                Q = {
                    READ_INDEX: 0,
                    WRITE_INDEX: 1
                };
            class B {
                constructor(A, I = 1) {
                    (this._channelData = []), (this._channelCount = I), (this._state = new Uint32Array(new SharedArrayBuffer(Object.keys(Q).length * Uint32Array.BYTES_PER_ELEMENT))), (this._bufferLength = A + 1);
                    for (let A = 0; A < I; A++) this._channelData.push(new Float32Array(new SharedArrayBuffer(this._bufferLength * Float32Array.BYTES_PER_ELEMENT)));
                }
                static from(A) {
                    return Object.setPrototypeOf(A, B.prototype);
                }
                push(A, I) {
                    let g = Atomics.load(this._state, Q.READ_INDEX),
                        C = Atomics.load(this._state, Q.WRITE_INDEX);
                    if (this._getAvailableWrite(g, C) < I) return !1;
                    let B = C + I;
                    if (this._bufferLength < B) {
                        B -= this._bufferLength;
                        for (let I = 0; I < this._channelCount; I++) {
                            let g = this._channelData[I].subarray(C),
                                Q = this._channelData[I].subarray(0, B);
                            g.set(A[I].subarray(0, g.length)), Q.set(A[I].subarray(g.length));
                        }
                    } else {
                        for (let g = 0; g < this._channelCount; g++) this._channelData[g].subarray(C, B).set(A[g].subarray(0, I));
                        B === this._bufferLength && (B = 0);
                    }
                    return Atomics.store(this._state, Q.WRITE_INDEX, B), !0;
                }
                pull(A, I) {
                    let g = Atomics.load(this._state, Q.READ_INDEX),
                        C = Atomics.load(this._state, Q.WRITE_INDEX);
                    if (this._getAvailableRead(g, C) < I) return !1;
                    let B = g + I;
                    if (this._bufferLength < B) {
                        B -= this._bufferLength;
                        for (let I = 0; I < this._channelCount; I++) {
                            let C = this._channelData[I].subarray(g),
                                Q = this._channelData[I].subarray(0, B);
                            A[I].set(C), A[I].set(Q, C.length);
                        }
                    } else {
                        for (let I = 0; I < this._channelCount; ++I) A[I].set(this._channelData[I].subarray(g, B));
                        B === this._bufferLength && (B = 0);
                    }
                    return Atomics.store(this._state, Q.READ_INDEX, B), !0;
                }
                printAvailableReadAndWrite() {
                    let A = Atomics.load(this._state, Q.READ_INDEX),
                        I = Atomics.load(this._state, Q.WRITE_INDEX);
                    C.Logger.log(this, {
                        availableRead: this._getAvailableRead(A, I),
                        availableWrite: this._getAvailableWrite(A, I)
                    });
                }
                getAvailableSamples() {
                    let A = Atomics.load(this._state, Q.READ_INDEX),
                        I = Atomics.load(this._state, Q.WRITE_INDEX);
                    return this._getAvailableRead(A, I);
                }
                isFrameAvailable(A) {
                    return this.getAvailableSamples() >= A;
                }
                getBufferLength() {
                    return this._bufferLength - 1;
                }
                _getAvailableWrite(A, I) {
                    return I >= A ? this._bufferLength - I + A - 1 : A - I - 1;
                }
                _getAvailableRead(A, I) {
                    return I >= A ? I - A : I + this._bufferLength - A;
                }
            }
            I.SharedRingBuffer = B;
        },
        333: (A, I) => {
            Object.defineProperty(I, '__esModule', { value: !0 }),
                (I.sampleModelMap = void 0),
                (I.sampleModelMap = {
                    8000: 'model8',
                    16000: 'model16',
                    24000: 'model32',
                    32000: 'model32',
                    44100: 'model32',
                    48000: 'model32',
                    88200: 'model32',
                    96000: 'model32'
                });
        },
        862: (A, I, g) => {
            Object.defineProperty(I, '__esModule', { value: !0 }), (I.WORKER_URL = I.WORKLET_URL = void 0);
            let C = g(3),
                Q = g(656);
            function B(A) {
                return window.URL.createObjectURL(new Blob([A], { type: 'application/javascript' }));
            }
            (I.WORKLET_URL = B(C)), (I.WORKER_URL = B(Q));
        },
        687: (A, I) => {
            Object.defineProperty(I, '__esModule', { value: !0 }),
                (I.createWAVBlob = I.downloadBlob = I.blobToBase64 = void 0),
                (I.blobToBase64 = async function (A) {
                    return new Promise((I, g) => {
                        let C = new FileReader();
                        (C.onloadend = () => I(C.result)), C.readAsDataURL(A);
                    });
                }),
                (I.downloadBlob = function (A, I) {
                    let g = window.URL.createObjectURL(I),
                        C = document.createElement('a');
                    (C.href = g), (C.download = A || 'file'), C.click();
                }),
                (I.createWAVBlob = function (A, I) {
                    if (!A.length) return new Blob([], { type: 'audio/wav; codecs=wav' });
                    let g = A[0].length,
                        C = new Float32Array(g * A.length);
                    return (
                        A.forEach((A, I) => {
                            C.set(A, I * g);
                        }),
                        new Blob(
                            [
                                (function (A, I) {
                                    let g = I.isFloat ? Float32Array : Uint16Array,
                                        C = (function (A) {
                                            let I = A.numFrames,
                                                g = A.numChannels || 2,
                                                C = A.isFloat ? 4 : 2,
                                                Q = A.isFloat ? 3 : 1,
                                                B = A.sampleRate,
                                                E = g * C,
                                                D = I * E,
                                                x = new ArrayBuffer(44),
                                                i = new DataView(x),
                                                o = 0;
                                            function a(A) {
                                                for (let I = 0; I < A.length; I++) i.setUint8(o + I, A.charCodeAt(I));
                                                o += A.length;
                                            }
                                            function h(A) {
                                                i.setUint32(o, A, !0), (o += 4);
                                            }
                                            function G(A) {
                                                i.setUint16(o, A, !0), (o += 2);
                                            }
                                            return a('RIFF'), h(D + 36), a('WAVE'), a('fmt '), h(16), G(Q), G(g), h(B), h(B * E), G(E), G(8 * C), a('data'), h(D), new Uint8Array(x);
                                        })(Object.assign({}, I, { numFrames: A.byteLength / g.BYTES_PER_ELEMENT })),
                                        Q = new Uint8Array(C.length + A.byteLength);
                                    return Q.set(C, 0), Q.set(new Uint8Array(A), C.length), Q;
                                })(C.buffer, {
                                    isFloat: !0,
                                    numChannels: 1,
                                    sampleRate: I
                                })
                            ],
                            { type: 'audio/wav;codecs=wav' }
                        )
                    );
                });
        },
        479: (A, I) => {
            Object.defineProperty(I, '__esModule', { value: !0 }),
                (I.isMobile = I.isSafari = void 0),
                (I.isSafari = function () {
                    return navigator?.vendor && navigator?.vendor?.indexOf('Apple') > -1 && navigator.userAgent && -1 == navigator.userAgent.indexOf('CriOS') && -1 == navigator.userAgent.indexOf('FxiOS');
                }),
                (I.isMobile = function () {
                    let A = navigator.userAgent || navigator?.vendor || window?.opera;
                    return /iPhone|iPad|iPod|Android|IEMobile|Windows Phone|BlackBerry|webOS|Opera Mini|Nexus 7|Nexus 10|KFAPWI/i.test(A) || /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(A) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(A.substr(0, 4));
                });
        },
        406: (A, I, g) => {
            Object.defineProperty(I, '__esModule', { value: !0 }), (I.createSharedBuffers = I.STATE = void 0);
            let C = g(785),
                Q = g(761);
            (I.STATE = { REQUEST_NOISE_CANCELLATION: 0 }),
                (I.createSharedBuffers = function (A) {
                    let g = ((Q.SDK_FRAME_DURATION_10MS * A.sampleRate) / 1000) * Q.WEB_AUDIO_CHUNK_SIZE;
                    return {
                        inputRingBuffer: new C.SharedRingBuffer(g, A.channelCount || 1),
                        outputRingBuffer: new C.SharedRingBuffer(g, A.channelCount || 1),
                        atomicState: new Int32Array(new SharedArrayBuffer(Object.keys(I.STATE).length * Int32Array.BYTES_PER_ELEMENT))
                    };
                });
        },
        761: (A, I) => {
            Object.defineProperty(I, '__esModule', { value: !0 }), (I.SUPPORTED_SAMPLE_RATES = I.SDK_FRAME_DURATION_10MS = I.BUFFER_OVERFLOW_MS = I.BUFFER_DROP_KEEP_MS = I.BUFFER_DROP_SIZE_MS = I.WORKLET_PROCESSOR_NAME = I.WEB_AUDIO_CHUNK_SIZE = void 0), (I.WEB_AUDIO_CHUNK_SIZE = 128), (I.WORKLET_PROCESSOR_NAME = 'processor'), (I.BUFFER_DROP_SIZE_MS = 500), (I.BUFFER_DROP_KEEP_MS = 40), (I.BUFFER_OVERFLOW_MS = 200), (I.SDK_FRAME_DURATION_10MS = 10), (I.SUPPORTED_SAMPLE_RATES = [8000, 16000, 24000, 32000, 44100, 48000, 88200, 96000]);
        },
        608: (A, I, g) => {
            Object.defineProperty(I, '__esModule', { value: !0 }), (I.sanitizeModelPath = I.hasInvalidModelPath = I.getModelName = void 0);
            let C = g(333);
            function Q(A) {
                return /^https?\:\/\//i.test(A) ? new URL(A).toString() : ('/' != A?.[0] && (A = '/' + A), new URL(window.location.origin + A).toString());
            }
            (I.getModelName = function (A) {
                return C.sampleModelMap[A];
            }),
                (I.hasInvalidModelPath = function (A) {
                    try {
                        return Object.values(A).forEach((A) => Q(A)), !1;
                    } catch (A) {
                        return !0;
                    }
                }),
                (I.sanitizeModelPath = Q);
        }
    },
    C = {};
function Q(A) {
    var I = C[A];
    if (void 0 !== I) return I.exports;
    var B = (C[A] = { exports: {} });
    return g[A](B, B.exports, Q), B.exports;
}
var B = {};
for (var E in ((() => {
    Object.defineProperty(B, '__esModule', { value: !0 });
    let A = Q(75),
        I = Q(24),
        g = Q(862),
        C = Q(761),
        E = Q(608),
        D = Q(479),
        x = Q(967);
    class i {
        constructor(A) {
            this.state = 'INITIAL';
            let I = !!A?.params?.debugLogs;
            if ((x.Logger.setOptions(I), x.Logger.collectFrom(window, {}), !i.isSupported())) throw Error('SDK_BROWSER_NOT_SUPPORTED');
            if (!A.params || !A?.params?.models || Object.keys(!A?.params?.models).length) throw Error('INVALID_OPTIONS');
            if ((0, E.hasInvalidModelPath)(A?.params?.models)) throw (I && x.Logger.error('Krisp SDK - Invalid model url. Accepted structure is schema://domain.ext/path/to/model.kw'), Error('INVALID_MODEL_URL'));
            A?.params?.useSharedArrayBuffer && 'undefined' == typeof SharedArrayBuffer && (x.Logger.warn('Krisp SDK - SharedArrayByffer is not supported by browser. Make sure all security requirements are present. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements'), (A.params.useSharedArrayBuffer = !1)),
                (this.options = {
                    params: {
                        models: A.params.models,
                        useSharedArrayBuffer: !!A.params?.useSharedArrayBuffer,
                        logProcessStats: !!A.params?.logProcessStats,
                        bufferOverflowMS: A.params.bufferOverflowMS || C.BUFFER_OVERFLOW_MS,
                        debugLogs: I
                    },
                    callbacks: {
                        errorCallback: A.callbacks?.errorCallback || (() => {})
                    }
                }),
                this.debugLogs && x.Logger.info('KrispSDK:constructor', JSON.stringify(this.options));
        }
        get debugLogs() {
            return this.options.params.debugLogs;
        }
        static isSupported() {
            return !(0, D.isSafari)() && !(0, D.isMobile)();
        }
        async init() {
            if ('INITIALIZED' === this.state) throw (this.debugLogs && x.Logger.error('KrispSDK:init', 'SDK already initialized'), Error('SDK_ALREADY_INITIALIZED'));
            (this.state = 'INITIALIZED'), this.debugLogs && (0, I.createDebugWidget)();
        }
        async createNoiseFilter(I, Q, B) {
            if (
                (this.debugLogs &&
                    x.Logger.info(
                        'KrispSDK:createNoiseFilter',
                        JSON.stringify({
                            userAgent: navigator.userAgent,
                            devices: await navigator.mediaDevices.enumerateDevices()
                        })
                    ),
                'INITIALIZED' !== this.state)
            )
                throw (this.debugLogs && x.Logger.error('KrispSDK:createNoiseFilter', 'already initialized'), Error('SDK_NOT_INITIALIZED'));
            if (!I || !I.audioWorklet) throw (this.debugLogs && x.Logger.error('KrispSDK:createNoiseFilter', 'audioContext or audioContext.audioWorklet not found'), Error('INVALID_AUDIO_CONTEXT'));
            if (0 > C.SUPPORTED_SAMPLE_RATES.indexOf(I.sampleRate)) throw Error('NOT_SUPPORTED_SAMPLE_RATE');
            try {
                this.debugLogs && x.Logger.info('KrispSDK:createNoiseFilter', 'creating audioWorklet'), await I.audioWorklet.addModule(g.WORKLET_URL);
            } catch (A) {
                throw (this.debugLogs && x.Logger.error('KrispSDK:createNoiseFilter', A), Error('WORKLET_NOT_SUPPORTED'));
            }
            return new A.AudioFilterNode(I, this.options.params, Q, B);
        }
        downloadReport() {
            return x.Logger.downloadReport();
        }
        dispose() {
            this.state = 'INITIAL';
        }
    }
    B.default = i;
})(),
B))
    I[E] = B[E];
B.__esModule && Object.defineProperty(I, '__esModule', { value: !0 });
