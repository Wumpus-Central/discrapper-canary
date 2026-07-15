d.d(t, { t: () => e });
var i = d(117589),
    e = class {
        constructor(l, t) {
            (this.hasFrame = !1),
                (this.disposed = !1),
                (this.eventTarget = new EventTarget()),
                (this.video = document.createElement("video")),
                (this.video.srcObject = l),
                (this.video.autoplay = !0),
                (this.video.playsInline = !0),
                (this.video.muted = !0);
            const d = l.getVideoTracks()[0]?.getSettings(),
                i = t?.width ?? d?.width ?? 1280,
                e = t?.height ?? d?.height ?? 720;
            (this.canvas = document.createElement("canvas")),
                (this.canvas.width = i),
                (this.canvas.height = e),
                (this.ctx = this.canvas.getContext("2d", { willReadFrequently: !0 }));
            const c = t?.fps ?? 10,
                a = c > 0 ? Math.max(16, Math.floor(1e3 / c)) : 0;
            this.video.addEventListener("loadedmetadata", () => {
                this.video.videoWidth > 0 &&
                    this.video.videoHeight > 0 &&
                    ((this.canvas.width = this.video.videoWidth), (this.canvas.height = this.video.videoHeight));
            });
            try {
                this.video.play();
            } catch {}
            this.rafLoop(a);
        }
        addEventListener(l, t, d) {
            this.eventTarget.addEventListener(l, t, d);
        }
        removeEventListener(l, t, d) {
            this.eventTarget.removeEventListener(l, t, d);
        }
        getLatestCanvas() {
            return (this.hasFrame || this.tick(), this.hasFrame) ? new i.t(this.canvas) : null;
        }
        getLatestFrame() {
            if (!this.ctx || (this.hasFrame || this.tick(), !this.hasFrame)) return null;
            try {
                return this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
            } catch {
                return null;
            }
        }
        dispose() {
            this.disposed ||
                ((this.disposed = !0),
                void 0 !== this.rafId && (window.cancelAnimationFrame(this.rafId), (this.rafId = void 0)),
                (this.video.srcObject = null),
                (this.canvas.width = 0),
                (this.canvas.height = 0),
                (this.hasFrame = !1));
        }
        rafLoop(l) {
            let t = (d) => {
                if (!this.disposed) {
                    if (l <= 0 || void 0 === this.lastTickTimeMs || d - this.lastTickTimeMs >= l) {
                        this.lastTickTimeMs = d;
                        let l = this.lastFrameTimeSeconds;
                        this.tick();
                        let t = this.video.currentTime;
                        void 0 === l
                            ? this.hasFrame &&
                              ((this.lastFrameTimeSeconds = t), this.eventTarget.dispatchEvent(new Event("frame")))
                            : this.hasFrame &&
                              t !== l &&
                              ((this.lastFrameTimeSeconds = t), this.eventTarget.dispatchEvent(new Event("frame")));
                    }
                    this.rafId = window.requestAnimationFrame(t);
                }
            };
            this.rafId = window.requestAnimationFrame(t);
        }
        tick() {
            if (!this.ctx || this.video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) return;
            let l = this.video.videoWidth,
                t = this.video.videoHeight;
            if (0 !== l && 0 !== t) {
                (this.canvas.width !== l || this.canvas.height !== t) &&
                    ((this.canvas.width = l), (this.canvas.height = t));
                try {
                    this.ctx.drawImage(this.video, 0, 0), (this.hasFrame = !0);
                } catch {
                    this.hasFrame = !1;
                }
            }
        }
    };
