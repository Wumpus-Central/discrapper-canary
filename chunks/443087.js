function n(e) {
    let n = e.regex,
        r = e.COMMENT('//', '$', { contains: [{ begin: /\\\n/ }] }),
        i = 'decltype\\(auto\\)',
        a = '[a-zA-Z_]\\w*::',
        o = '<[^<>]+>',
        s = '(?!struct)(' + i + '|' + n.optional(a) + '[a-zA-Z_]\\w*' + n.optional(o) + ')',
        l = {
            className: 'type',
            begin: '\\b[a-z\\d_]*_t\\b'
        },
        u = '\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)',
        c = {
            className: 'string',
            variants: [
                {
                    begin: '(u8?|U|L)?"',
                    end: '"',
                    illegal: '\\n',
                    contains: [e.BACKSLASH_ESCAPE]
                },
                {
                    begin: "(u8?|U|L)?'(" + u + '|.)',
                    end: "'",
                    illegal: '.'
                },
                e.END_SAME_AS_BEGIN({
                    begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
                    end: /\)([^()\\ ]{0,16})"/
                })
            ]
        },
        d = {
            className: 'number',
            variants: [{ begin: "[+-]?(?:(?:[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)" }, { begin: "[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)" }],
            relevance: 0
        },
        f = {
            className: 'meta',
            begin: /#\s*[a-z]+\b/,
            end: /$/,
            keywords: { keyword: 'if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include' },
            contains: [
                {
                    begin: /\\\n/,
                    relevance: 0
                },
                e.inherit(c, { className: 'string' }),
                {
                    className: 'string',
                    begin: /<.*?>/
                },
                r,
                e.C_BLOCK_COMMENT_MODE
            ]
        },
        p = {
            className: 'title',
            begin: n.optional(a) + e.IDENT_RE,
            relevance: 0
        },
        h = n.optional(a) + e.IDENT_RE + '\\s*\\(',
        _ = {
            type: ['bool', 'char', 'char16_t', 'char32_t', 'char8_t', 'double', 'float', 'int', 'long', 'short', 'void', 'wchar_t', 'unsigned', 'signed', 'const', 'static'],
            keyword: ['alignas', 'alignof', 'and', 'and_eq', 'asm', 'atomic_cancel', 'atomic_commit', 'atomic_noexcept', 'auto', 'bitand', 'bitor', 'break', 'case', 'catch', 'class', 'co_await', 'co_return', 'co_yield', 'compl', 'concept', 'const_cast|10', 'consteval', 'constexpr', 'constinit', 'continue', 'decltype', 'default', 'delete', 'do', 'dynamic_cast|10', 'else', 'enum', 'explicit', 'export', 'extern', 'false', 'final', 'for', 'friend', 'goto', 'if', 'import', 'inline', 'module', 'mutable', 'namespace', 'new', 'noexcept', 'not', 'not_eq', 'nullptr', 'operator', 'or', 'or_eq', 'override', 'private', 'protected', 'public', 'reflexpr', 'register', 'reinterpret_cast|10', 'requires', 'return', 'sizeof', 'static_assert', 'static_cast|10', 'struct', 'switch', 'synchronized', 'template', 'this', 'thread_local', 'throw', 'transaction_safe', 'transaction_safe_dynamic', 'true', 'try', 'typedef', 'typeid', 'typename', 'union', 'using', 'virtual', 'volatile', 'while', 'xor', 'xor_eq'],
            literal: ['NULL', 'false', 'nullopt', 'nullptr', 'true'],
            built_in: ['_Pragma'],
            _type_hints: ['any', 'auto_ptr', 'barrier', 'binary_semaphore', 'bitset', 'complex', 'condition_variable', 'condition_variable_any', 'counting_semaphore', 'deque', 'false_type', 'flat_map', 'flat_set', 'future', 'imaginary', 'initializer_list', 'istringstream', 'jthread', 'latch', 'lock_guard', 'multimap', 'multiset', 'mutex', 'optional', 'ostringstream', 'packaged_task', 'pair', 'promise', 'priority_queue', 'queue', 'recursive_mutex', 'recursive_timed_mutex', 'scoped_lock', 'set', 'shared_future', 'shared_lock', 'shared_mutex', 'shared_timed_mutex', 'shared_ptr', 'stack', 'string_view', 'stringstream', 'timed_mutex', 'thread', 'true_type', 'tuple', 'unique_lock', 'unique_ptr', 'unordered_map', 'unordered_multimap', 'unordered_multiset', 'unordered_set', 'variant', 'vector', 'weak_ptr', 'wstring', 'wstring_view']
        },
        m = {
            className: 'function.dispatch',
            relevance: 0,
            keywords: {
                _hint: ['abort', 'abs', 'acos', 'apply', 'as_const', 'asin', 'atan', 'atan2', 'calloc', 'ceil', 'cerr', 'cin', 'clog', 'cos', 'cosh', 'cout', 'declval', 'endl', 'exchange', 'exit', 'exp', 'fabs', 'floor', 'fmod', 'forward', 'fprintf', 'fputs', 'free', 'frexp', 'fscanf', 'future', 'invoke', 'isalnum', 'isalpha', 'iscntrl', 'isdigit', 'isgraph', 'islower', 'isprint', 'ispunct', 'isspace', 'isupper', 'isxdigit', 'labs', 'launder', 'ldexp', 'log', 'log10', 'make_pair', 'make_shared', 'make_shared_for_overwrite', 'make_tuple', 'make_unique', 'malloc', 'memchr', 'memcmp', 'memcpy', 'memset', 'modf', 'move', 'pow', 'printf', 'putchar', 'puts', 'realloc', 'scanf', 'sin', 'sinh', 'snprintf', 'sprintf', 'sqrt', 'sscanf', 'std', 'stderr', 'stdin', 'stdout', 'strcat', 'strchr', 'strcmp', 'strcpy', 'strcspn', 'strlen', 'strncat', 'strncmp', 'strncpy', 'strpbrk', 'strrchr', 'strspn', 'strstr', 'swap', 'tan', 'tanh', 'terminate', 'to_underlying', 'tolower', 'toupper', 'vfprintf', 'visit', 'vprintf', 'vsprintf']
            },
            begin: n.concat(/\b/, /(?!decltype)/, /(?!if)/, /(?!for)/, /(?!switch)/, /(?!while)/, e.IDENT_RE, n.lookahead(/(<[^<>]+>|)\s*\(/))
        },
        g = [m, f, l, r, e.C_BLOCK_COMMENT_MODE, d, c],
        E = {
            variants: [
                {
                    begin: /=/,
                    end: /;/
                },
                {
                    begin: /\(/,
                    end: /\)/
                },
                {
                    beginKeywords: 'new throw return else',
                    end: /;/
                }
            ],
            keywords: _,
            contains: g.concat([
                {
                    begin: /\(/,
                    end: /\)/,
                    keywords: _,
                    contains: g.concat(['self']),
                    relevance: 0
                }
            ]),
            relevance: 0
        },
        v = {
            className: 'function',
            begin: '(' + s + '[\\*&\\s]+)+' + h,
            returnBegin: !0,
            end: /[{;=]/,
            excludeEnd: !0,
            keywords: _,
            illegal: /[^\w\s\*&:<>.]/,
            contains: [
                {
                    begin: i,
                    keywords: _,
                    relevance: 0
                },
                {
                    begin: h,
                    returnBegin: !0,
                    contains: [p],
                    relevance: 0
                },
                {
                    begin: /::/,
                    relevance: 0
                },
                {
                    begin: /:/,
                    endsWithParent: !0,
                    contains: [c, d]
                },
                {
                    relevance: 0,
                    match: /,/
                },
                {
                    className: 'params',
                    begin: /\(/,
                    end: /\)/,
                    keywords: _,
                    relevance: 0,
                    contains: [
                        r,
                        e.C_BLOCK_COMMENT_MODE,
                        c,
                        d,
                        l,
                        {
                            begin: /\(/,
                            end: /\)/,
                            keywords: _,
                            relevance: 0,
                            contains: ['self', r, e.C_BLOCK_COMMENT_MODE, c, d, l]
                        }
                    ]
                },
                l,
                r,
                e.C_BLOCK_COMMENT_MODE,
                f
            ]
        };
    return {
        name: 'C++',
        aliases: ['cc', 'c++', 'h++', 'hpp', 'hh', 'hxx', 'cxx'],
        keywords: _,
        illegal: '</',
        classNameAliases: { 'function.dispatch': 'built_in' },
        contains: [].concat(E, v, m, g, [
            f,
            {
                begin: '\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function|flat_map|flat_set)\\s*<(?!<)',
                end: '>',
                keywords: _,
                contains: ['self', l]
            },
            {
                begin: e.IDENT_RE + '::',
                keywords: _
            },
            {
                match: [/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/, /\s+/, /\w+/],
                className: {
                    1: 'keyword',
                    3: 'title.class'
                }
            }
        ])
    };
}
function r(e) {
    let r = ['boolean', 'byte', 'word', 'String'],
        i = ['KeyboardController', 'MouseController', 'SoftwareSerial', 'EthernetServer', 'EthernetClient', 'LiquidCrystal', 'RobotControl', 'GSMVoiceCall', 'EthernetUDP', 'EsploraTFT', 'HttpClient', 'RobotMotor', 'WiFiClient', 'GSMScanner', 'FileSystem', 'Scheduler', 'GSMServer', 'YunClient', 'YunServer', 'IPAddress', 'GSMClient', 'GSMModem', 'Keyboard', 'Ethernet', 'Console', 'GSMBand', 'Esplora', 'Stepper', 'Process', 'WiFiUDP', 'GSM_SMS', 'Mailbox', 'USBHost', 'Firmata', 'PImage', 'Client', 'Server', 'GSMPIN', 'FileIO', 'Bridge', 'Serial', 'EEPROM', 'Stream', 'Mouse', 'Audio', 'Servo', 'File', 'Task', 'GPRS', 'WiFi', 'Wire', 'TFT', 'GSM', 'SPI', 'SD'],
        a = ['setup', 'loop', 'runShellCommandAsynchronously', 'analogWriteResolution', 'retrieveCallingNumber', 'printFirmwareVersion', 'analogReadResolution', 'sendDigitalPortPair', 'noListenOnLocalhost', 'readJoystickButton', 'setFirmwareVersion', 'readJoystickSwitch', 'scrollDisplayRight', 'getVoiceCallStatus', 'scrollDisplayLeft', 'writeMicroseconds', 'delayMicroseconds', 'beginTransmission', 'getSignalStrength', 'runAsynchronously', 'getAsynchronously', 'listenOnLocalhost', 'getCurrentCarrier', 'readAccelerometer', 'messageAvailable', 'sendDigitalPorts', 'lineFollowConfig', 'countryNameWrite', 'runShellCommand', 'readStringUntil', 'rewindDirectory', 'readTemperature', 'setClockDivider', 'readLightSensor', 'endTransmission', 'analogReference', 'detachInterrupt', 'countryNameRead', 'attachInterrupt', 'encryptionType', 'readBytesUntil', 'robotNameWrite', 'readMicrophone', 'robotNameRead', 'cityNameWrite', 'userNameWrite', 'readJoystickY', 'readJoystickX', 'mouseReleased', 'openNextFile', 'scanNetworks', 'noInterrupts', 'digitalWrite', 'beginSpeaker', 'mousePressed', 'isActionDone', 'mouseDragged', 'displayLogos', 'noAutoscroll', 'addParameter', 'remoteNumber', 'getModifiers', 'keyboardRead', 'userNameRead', 'waitContinue', 'processInput', 'parseCommand', 'printVersion', 'readNetworks', 'writeMessage', 'blinkVersion', 'cityNameRead', 'readMessage', 'setDataMode', 'parsePacket', 'isListening', 'setBitOrder', 'beginPacket', 'isDirectory', 'motorsWrite', 'drawCompass', 'digitalRead', 'clearScreen', 'serialEvent', 'rightToLeft', 'setTextSize', 'leftToRight', 'requestFrom', 'keyReleased', 'compassRead', 'analogWrite', 'interrupts', 'WiFiServer', 'disconnect', 'playMelody', 'parseFloat', 'autoscroll', 'getPINUsed', 'setPINUsed', 'setTimeout', 'sendAnalog', 'readSlider', 'analogRead', 'beginWrite', 'createChar', 'motorsStop', 'keyPressed', 'tempoWrite', 'readButton', 'subnetMask', 'debugPrint', 'macAddress', 'writeGreen', 'randomSeed', 'attachGPRS', 'readString', 'sendString', 'remotePort', 'releaseAll', 'mouseMoved', 'background', 'getXChange', 'getYChange', 'answerCall', 'getResult', 'voiceCall', 'endPacket', 'constrain', 'getSocket', 'writeJSON', 'getButton', 'available', 'connected', 'findUntil', 'readBytes', 'exitValue', 'readGreen', 'writeBlue', 'startLoop', 'IPAddress', 'isPressed', 'sendSysex', 'pauseMode', 'gatewayIP', 'setCursor', 'getOemKey', 'tuneWrite', 'noDisplay', 'loadImage', 'switchPIN', 'onRequest', 'onReceive', 'changePIN', 'playFile', 'noBuffer', 'parseInt', 'overflow', 'checkPIN', 'knobRead', 'beginTFT', 'bitClear', 'updateIR', 'bitWrite', 'position', 'writeRGB', 'highByte', 'writeRed', 'setSpeed', 'readBlue', 'noStroke', 'remoteIP', 'transfer', 'shutdown', 'hangCall', 'beginSMS', 'endWrite', 'attached', 'maintain', 'noCursor', 'checkReg', 'checkPUK', 'shiftOut', 'isValid', 'shiftIn', 'pulseIn', 'connect', 'println', 'localIP', 'pinMode', 'getIMEI', 'display', 'noBlink', 'process', 'getBand', 'running', 'beginSD', 'drawBMP', 'lowByte', 'setBand', 'release', 'bitRead', 'prepare', 'pointTo', 'readRed', 'setMode', 'noFill', 'remove', 'listen', 'stroke', 'detach', 'attach', 'noTone', 'exists', 'buffer', 'height', 'bitSet', 'circle', 'config', 'cursor', 'random', 'IRread', 'setDNS', 'endSMS', 'getKey', 'micros', 'millis', 'begin', 'print', 'write', 'ready', 'flush', 'width', 'isPIN', 'blink', 'clear', 'press', 'mkdir', 'rmdir', 'close', 'point', 'yield', 'image', 'BSSID', 'click', 'delay', 'read', 'text', 'move', 'peek', 'beep', 'rect', 'line', 'open', 'seek', 'fill', 'size', 'turn', 'stop', 'home', 'find', 'step', 'tone', 'sqrt', 'RSSI', 'SSID', 'end', 'bit', 'tan', 'cos', 'sin', 'pow', 'map', 'abs', 'max', 'min', 'get', 'run', 'put'],
        o = ['DIGITAL_MESSAGE', 'FIRMATA_STRING', 'ANALOG_MESSAGE', 'REPORT_DIGITAL', 'REPORT_ANALOG', 'INPUT_PULLUP', 'SET_PIN_MODE', 'INTERNAL2V56', 'SYSTEM_RESET', 'LED_BUILTIN', 'INTERNAL1V1', 'SYSEX_START', 'INTERNAL', 'EXTERNAL', 'DEFAULT', 'OUTPUT', 'INPUT', 'HIGH', 'LOW'],
        s = n(e),
        l = s.keywords;
    return (l.type = [...l.type, ...r]), (l.literal = [...l.literal, ...o]), (l.built_in = [...l.built_in, ...i]), (l._hints = a), (s.name = 'Arduino'), (s.aliases = ['ino']), (s.supersetOf = 'cpp'), s;
}
e.exports = r;
