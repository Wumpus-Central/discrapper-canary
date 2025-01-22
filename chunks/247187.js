r = { value: !0 };
for (
    var r,
        i = 'undefined' != typeof window && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform),
        a = {
            alt: 'altKey',
            control: 'ctrlKey',
            meta: 'metaKey',
            shift: 'shiftKey'
        },
        o = {
            add: '+',
            break: 'pause',
            cmd: 'meta',
            command: 'meta',
            ctl: 'control',
            ctrl: 'control',
            del: 'delete',
            down: 'arrowdown',
            esc: 'escape',
            ins: 'insert',
            left: 'arrowleft',
            mod: i ? 'meta' : 'control',
            opt: 'alt',
            option: 'alt',
            return: 'enter',
            right: 'arrowright',
            space: ' ',
            spacebar: ' ',
            up: 'arrowup',
            win: 'meta',
            windows: 'meta'
        },
        s = {
            backspace: 8,
            tab: 9,
            enter: 13,
            shift: 16,
            control: 17,
            alt: 18,
            pause: 19,
            capslock: 20,
            escape: 27,
            ' ': 32,
            pageup: 33,
            pagedown: 34,
            end: 35,
            home: 36,
            arrowleft: 37,
            arrowup: 38,
            arrowright: 39,
            arrowdown: 40,
            insert: 45,
            delete: 46,
            meta: 91,
            numlock: 144,
            scrolllock: 145,
            ';': 186,
            '=': 187,
            ',': 188,
            '-': 189,
            '.': 190,
            '/': 191,
            '`': 192,
            '[': 219,
            '\\': 220,
            ']': 221,
            "'": 222
        },
        l = 1;
    l < 20;
    l++
)
    s['f' + l] = 111 + l;
function u(e, n, r) {
    n && !('byKey' in n) && ((r = n), (n = null)), !Array.isArray(e) && (e = [e]);
    var i = e.map(function (e) {
            return f(e, n);
        }),
        a = function (e) {
            return i.some(function (n) {
                return p(n, e);
            });
        };
    return null == r ? a : a(r);
}
function c(e, n) {
    return u(e, n);
}
function d(e, n) {
    return u(e, { byKey: !0 }, n);
}
function f(e, n) {
    var r = n && n.byKey,
        i = {},
        o = (e = e.replace('++', '+add')).split('+'),
        s = o.length;
    for (var l in a) i[a[l]] = !1;
    var u = !0,
        c = !1,
        d = void 0;
    try {
        for (var f, p = o[Symbol.iterator](); !(u = (f = p.next()).done); u = !0) {
            var m = f.value,
                g = m.endsWith('?') && m.length > 1;
            g && (m = m.slice(0, -1));
            var E = _(m),
                v = a[E];
            (1 === s || !v) && (r ? (i.key = E) : (i.which = h(m))), v && (i[v] = !g || null);
        }
    } catch (e) {
        (c = !0), (d = e);
    } finally {
        try {
            !u && p.return && p.return();
        } finally {
            if (c) throw d;
        }
    }
    return i;
}
function p(e, n) {
    for (var r in e) {
        var i = e[r],
            a = void 0;
        if (null != i && (null != (a = 'key' === r && null != n.key ? n.key.toLowerCase() : 'which' === r ? (91 === i && 93 === n.which ? 91 : n.which) : n[r]) || !1 !== i)) {
            if (a !== i) return !1;
        }
    }
    return !0;
}
function h(e) {
    return s[(e = _(e))] || e.toUpperCase().charCodeAt(0);
}
function _(e) {
    return (e = o[(e = e.toLowerCase())] || e);
}
(r = u), (r = u), (r = c), (n.isKeyHotkey = d);
