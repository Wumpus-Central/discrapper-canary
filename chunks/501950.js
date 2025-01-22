r.d(n, {
    C1: function () {
        return c;
    },
    HS: function () {
        return f;
    },
    Hg: function () {
        return d;
    },
    l0: function () {
        return p;
    }
});
var i = r(757143);
var a = r(733860);
var o = r(264344),
    s = r.n(o),
    l = r(992774),
    u = r(149396);
function c(e, n) {
    var r;
    let i = !1,
        a = n.map((n, r) => {
            let { guid: a, guid: o, name: s, name: l, index: c, facing: d } = n;
            return (
                /^default/.test(s) ? ((i = !0), (a = u.w5), (s = s.replace('default', 'Default'))) : (a = null != a && '' !== a ? a : s),
                null != c && (r = c),
                {
                    id: a,
                    type: e,
                    index: r,
                    name: s,
                    originalName: l,
                    originalId: o,
                    facing: d
                }
            );
        });
    return (
        e !== u.h7.VIDEO_INPUT &&
            !i &&
            (null === s() || void 0 === s() ? void 0 : null === (r = s().os) || void 0 === r ? void 0 : r.family) != null &&
            /^win/i.test(s().os.family) &&
            a.unshift({
                id: u.w5,
                type: e,
                index: -1,
                name: 'Default'
            }),
        a
    );
}
function d() {
    return new Promise((e) => {
        (0, l.zS)().getInputDevices((n) => e(c(u.h7.AUDIO_INPUT, n)));
    });
}
function f() {
    return new Promise((e) => {
        (0, l.zS)().getOutputDevices((n) => e(c(u.h7.AUDIO_OUTPUT, n)));
    });
}
function p() {
    return new Promise((e) => {
        (0, l.zS)().getVideoInputDevices((n) => e(c(u.h7.VIDEO_INPUT, n)));
    });
}
