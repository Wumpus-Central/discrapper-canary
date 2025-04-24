n.d(t, {
    Dz: () => _,
    SW: () => w,
    T_: () => M,
    _v: () => k,
    jd: () => x,
    pz: () => D,
    s5: () => R
}),
    n(388685),
    n(467055),
    n(361932),
    n(187205),
    n(539854),
    n(642613);
var r = n(921738),
    i = n.n(r),
    a = n(259443),
    o = n(433517),
    s = n(358085),
    l = n(981631);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
let d = new a.Yd('KeyboardLayoutMapUtils'),
    f = (0, s.isLinux)() ? l.HsE : (0, s.isMac)() ? l.REU : (0, s.isWindows)() || __OVERLAY__ ? l.iC$ : i().codes,
    _ = new Set([192, 220, 222, 223, 229]),
    p = Object.freeze({
        KeyA: 'a',
        KeyB: 'b',
        KeyC: 'c',
        KeyD: 'd',
        KeyE: 'e',
        KeyF: 'f',
        KeyG: 'g',
        KeyH: 'h',
        KeyI: 'i',
        KeyJ: 'j',
        KeyK: 'k',
        KeyL: 'l',
        KeyM: 'm',
        KeyN: 'n',
        KeyO: 'o',
        KeyP: 'p',
        KeyQ: 'q',
        KeyR: 'r',
        KeyS: 's',
        KeyT: 't',
        KeyU: 'u',
        KeyV: 'v',
        KeyW: 'w',
        KeyX: 'x',
        KeyY: 'y',
        KeyZ: 'z',
        Digit0: '0',
        Digit1: '1',
        Digit2: '2',
        Digit3: '3',
        Digit4: '4',
        Digit5: '5',
        Digit6: '6',
        Digit7: '7',
        Digit8: '8',
        Digit9: '9',
        Backquote: '`',
        Backslash: '\\',
        Quote: "'",
        Slash: '/',
        Comma: ',',
        Period: '.',
        Semicolon: ';',
        Equal: '=',
        Minus: '-',
        BracketLeft: '[',
        BracketRight: ']',
        IntlBackslash: '\xA7'
    });
function h(e) {
    return null == e ? e : e.toLocaleLowerCase();
}
class m {
    get(e) {
        return this.map.get(e);
    }
    has(e) {
        return this.map.has(e);
    }
    keys() {
        return this.map.keys();
    }
    values() {
        return this.map.values();
    }
    entries() {
        return this.map.entries();
    }
    forEach(e, t) {
        return this.map.forEach(e, t);
    }
    get size() {
        return this.map.size;
    }
    _set(e, t) {
        this.map.set(e, t);
    }
    constructor(e = p) {
        c(this, 'map', void 0),
            (this.map = new Map(
                Object.entries(e).map((e) => {
                    let [t, n] = e;
                    return [t, h(n)];
                })
            ));
    }
}
let g = new m();
async function E() {
    var e;
    if (__OVERLAY__) return (g = new m()), !1;
    if ((null == (e = navigator.keyboard) ? void 0 : e.getLayoutMap) != null)
        try {
            let e = await navigator.keyboard.getLayoutMap();
            return (g = new m(Object.fromEntries(e.entries()))), !0;
        } catch (e) {
            g = new m();
        }
    return !1;
}
function b() {
    return g;
}
function y(e) {
    let t = new Set(),
        n = {};
    for (let [r, i] of Object.entries(e)) {
        let e = h(r);
        if (t.has(e) && null != n[e] && n[e] !== i) {
            d.error('Seperate keyCode mappings found for: '.concat(e));
            continue;
        }
        t.add(e), (n[e] = i);
    }
    return n;
}
function v(e) {
    return {
        keyCode: e.keyCode,
        key: null != e.key ? h(e.key) : void 0,
        code: e.code
    };
}
let O = 'keyboard-layout-map';
function I() {
    var e;
    return null != (e = o.K.get(O)) ? e : null;
}
function S(e) {
    o.K.set(O, e);
}
class T {
    _setCachedKeyCodeMapEntries() {
        (this._cachedKeyCodeMapEntries = Object.entries(this.keyCodeMap).map((e) => {
            let [t, n] = e;
            return [Number(t), n];
        })),
            (this._cachedAllEvents = this._cachedKeyCodeMapEntries.flatMap((e) => {
                let [t, n] = e;
                return n;
            }));
    }
    _setCachedKeyMapEntries() {
        this._cachedKeyMapEntries = Object.entries(this.keyMap);
    }
    _setCachedKeyLayoutMapEntries() {
        this._cachedKeyLayoutMapEntries = Array.from(this.getLayoutMap().entries());
    }
    get cachedKeyCodeMapEntries() {
        return 0 === this._cachedKeyCodeMapEntries.length && this._setCachedKeyCodeMapEntries(), this._cachedKeyCodeMapEntries;
    }
    get cachedKeyMapEntries() {
        return 0 === this._cachedKeyMapEntries.length && this._setCachedKeyMapEntries(), this._cachedKeyMapEntries;
    }
    get cachedKeyLayoutMapEntries() {
        return 0 === this._cachedKeyLayoutMapEntries.length && this._setCachedKeyLayoutMapEntries(), this._cachedKeyLayoutMapEntries;
    }
    get cachedAllEvents() {
        return 0 === this._cachedAllEvents.length && this._setCachedKeyCodeMapEntries(), this._cachedAllEvents;
    }
    getKeyCodeMapItem(e) {
        return null == this.keyCodeMap[e] && (this.keyCodeMap[e] = []), this.keyCodeMap[e];
    }
    _buildKeyCodeMapFromKeyMap() {
        let e = {};
        for (let [n, r] of Object.entries(this.keyMap)) {
            var t;
            (e[r] = null != (t = e[r]) ? t : []),
                e[r].push({
                    keyCode: r,
                    key: n,
                    code: this.findCodeFromKeyboardLayoutMap(n, !0)
                });
        }
        return e;
    }
    _initializeInternalLayoutMap() {
        let e = b();
        (this._internalKeyLayoutMap = new Map(Array.from(e.entries()))), this._setCachedKeyLayoutMapEntries();
    }
    _hasExactMatch(e) {
        if (null == e.keyCode) return !1;
        let t = this.keyCodeMap[e.keyCode];
        return null != t && t.some((t) => t.key === e.key && t.code === e.code && t.keyCode === e.keyCode);
    }
    addEvent(e) {
        var t, n;
        let r = v(e);
        null == this._internalKeyLayoutMap && this._initializeInternalLayoutMap(), this._hasExactMatch(r) || (null != r.key && 'dead' !== r.key && (null == this.keyMap[r.key] ? (this.keyMap[r.key] = r.keyCode) : this.keyMap[r.key] !== r.keyCode && d.error('KeyboardMapper - Key code mismatch for key '.concat(r.key, ': ').concat(this.keyMap[r.key], ' !== ').concat(r.keyCode)), (this.keyCodeMap[r.keyCode] = null != (n = this.keyCodeMap[r.keyCode]) ? n : []), this.keyCodeMap[r.keyCode].push(r), null == (t = this._internalKeyLayoutMap) || t.set(r.code, r.key), this.updateCaches()));
    }
    updateCaches() {
        this._setCachedKeyCodeMapEntries(), this._setCachedKeyMapEntries(), this._setCachedKeyLayoutMapEntries();
    }
    reset() {
        (this._internalKeyLayoutMap = null), (this.keyMap = y(u({}, this._defaultKeyMap))), this._initializeInternalLayoutMap(), (this.keyCodeMap = this._buildKeyCodeMapFromKeyMap()), this.updateCaches(), this.save();
    }
    save() {
        S(this.keyMap);
    }
    getLayoutMap() {
        return null == this._internalKeyLayoutMap ? b() : this._internalKeyLayoutMap;
    }
    getKeyCode(e) {
        return this.keyMap[e];
    }
    findCodeFromKeyboardLayoutMap(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = this.cachedKeyLayoutMapEntries;
        n && (r = Array.from(b().entries()));
        let i = h(e),
            a =
                null ==
                (t = r.find((e) => {
                    let [t, n] = e;
                    return n === i;
                }))
                    ? void 0
                    : t[0];
        return null != a ? a : e;
    }
    constructor(e = {}) {
        c(this, 'keyCodeMap', void 0), c(this, 'keyMap', void 0), c(this, '_internalKeyLayoutMap', null), c(this, '_defaultKeyMap', void 0), c(this, '_cachedKeyCodeMapEntries', []), c(this, '_cachedKeyMapEntries', []), c(this, '_cachedKeyLayoutMapEntries', []), c(this, '_cachedAllEvents', []), (this._defaultKeyMap = e);
        let t = I();
        null != t ? (this.keyMap = t) : (this.keyMap = y(u({}, e))), this._initializeInternalLayoutMap(), (this.keyCodeMap = this._buildKeyCodeMapFromKeyMap()), this.updateCaches(), this.save();
    }
}
class A extends T {
    getKeyString(e, t) {
        var n;
        let r = this.getKeyCodeMapItem(e);
        return (
            0 === r.length &&
                (r = this.cachedKeyMapEntries
                    .filter((e) => {
                        let [t, n] = e;
                        return n == n;
                    })
                    .map((e) => {
                        let [n, r] = e;
                        return {
                            key: n,
                            keyCode: r,
                            code: null != t ? t : this.findCodeFromKeyboardLayoutMap(n)
                        };
                    })),
            null ==
            (n = r.find((n) => {
                let r = n.keyCode === e;
                return null != t ? r && n.code === t : r;
            }))
                ? void 0
                : n.key
        );
    }
    findExactKeyboardEventMatch(e, t, n) {
        let r = h(e);
        if ((null == t && (t = this.findCodeFromKeyboardLayoutMap(r)), null != n)) {
            let e = this.keyCodeMap[n];
            if (null != e) {
                let n = e.find((e) => h(e.key) === r && e.code === t);
                if (null != n) return n;
            }
        }
        if (null != n && null != t)
            return this.cachedAllEvents.find((e) => {
                let i = h(e.key) === r,
                    a = e.keyCode === n,
                    o = e.code === t;
                return a && i && o;
            });
    }
    getWeightedPossibleKeyStringMatches(e, t, n) {
        return this.cachedAllEvents
            .filter((r) => {
                let i = h(r.key) === h(e),
                    a = null == n || r.keyCode === n,
                    o = null == t || r.code === t;
                return a && i && o;
            })
            .sort((r, i) => {
                let a = (r) => {
                        let i = 0;
                        return h(r.key) === h(e) && (i += 0.5), null != t && r.code === t && (i += 0.3), null != n && r.keyCode === n && (i += 0.2), i;
                    },
                    o = a(r);
                return a(i) - o;
            });
    }
    findKeyboardEventByKey(e, t, n) {
        let r = h(e);
        if ((null == t && (t = this.findCodeFromKeyboardLayoutMap(r)), null != n)) {
            let e = this.keyCodeMap[n];
            if (null != e) {
                let n = e.find((e) => h(e.key) === r && e.code === t);
                if (null != n) return n;
            }
        }
        let [i] = this.getWeightedPossibleKeyStringMatches(e, t, n);
        return i;
    }
    findKeyboardEventByKeyCode(e, t) {
        let n = this.getKeyString(e, t);
        if ((null == n && null != t && (n = this.getLayoutMap().get(t)), null == n)) {
            var r;
            n =
                null ==
                (r = this.getKeyCodeMapItem(e).find((n) => {
                    let r = n.keyCode === e;
                    return null != t ? r && n.code === t : r;
                }))
                    ? void 0
                    : r.key;
        }
        return null == n ? this.getDefaultKeyboardEventShape(void 0, e, t) : this.findKeyboardEventByKey(n, t, e);
    }
    getDefaultKeyboardEventShape(e, t, n) {
        let r = null != e ? h(e) : void 0;
        if (null != r) {
            let e = this.keyMap[r];
            if (null == e) return;
            return v({
                keyCode: e,
                key: r,
                code: null != n ? n : this.findCodeFromKeyboardLayoutMap(r)
            });
        }
        if (null != t) {
            var i;
            let e =
                null ==
                (i = this.cachedKeyMapEntries.find((e) => {
                    let [t, n] = e;
                    return n == n;
                }))
                    ? void 0
                    : i[0];
            if (null == e) return;
            return v({
                keyCode: t,
                key: e,
                code: null != n ? n : this.findCodeFromKeyboardLayoutMap(e)
            });
        }
    }
}
let N = null,
    C = null;
function R() {
    return null != C
        ? C
        : (C = new Promise(async (e) => {
              await E(),
                  (N = new A(f)),
                  document.addEventListener('keydown', (e) => {
                      try {
                          null == N || N.addEvent(e);
                      } catch (t) {
                          d.error('KeyboardMapper - Error adding event', {
                              event: e,
                              error: t
                          });
                      }
                  }),
                  e();
          }));
}
function P() {
    return null == N ? (R(), null) : N;
}
async function w() {
    var e;
    await E(), null == (e = P()) || e.reset();
}
function D() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return n ? b() : null != (t = null == (e = P()) ? void 0 : e.getLayoutMap()) ? t : b();
}
function L(e) {
    var t, n;
    let r = null != e ? h(e) : void 0;
    if (null != r) return null != (n = null == (t = P()) ? void 0 : t.findCodeFromKeyboardLayoutMap(r)) ? n : void 0;
}
function x(e) {
    let t = v(e);
    if (null != t.key) {
        var n, r;
        return null != (r = null == (n = P()) ? void 0 : n.findExactKeyboardEventMatch(t.key, t.code, t.keyCode)) ? r : null;
    }
    return null;
}
function M(e) {
    var t, n, r, i;
    let a = null != e ? h(e) : void 0;
    if (null == a) return null;
    let o = L(a),
        s = null != (n = null == (t = P()) ? void 0 : t.findKeyboardEventByKey(a, o)) ? n : null;
    if (null != s) return s;
    try {
        let e = null != (i = null == (r = P()) ? void 0 : r.getDefaultKeyboardEventShape(a, void 0, o)) ? i : null;
        if (null == e) return null;
        let t = new KeyboardEvent('keydown', e);
        return v({
            keyCode: t.keyCode,
            key: t.key,
            code: t.code
        });
    } catch (e) {
        return null;
    }
}
function k(e) {
    var t, n, r, i;
    let a = null != (n = null == (t = P()) ? void 0 : t.findKeyboardEventByKeyCode(e)) ? n : null;
    if (null != a) return a;
    try {
        let t = null != (i = null == (r = P()) ? void 0 : r.getDefaultKeyboardEventShape(void 0, e)) ? i : null;
        if (null == t) return null;
        let n = new KeyboardEvent('keydown', t);
        return v({
            keyCode: n.keyCode,
            key: n.key,
            code: n.code
        });
    } catch (e) {
        return null;
    }
}
