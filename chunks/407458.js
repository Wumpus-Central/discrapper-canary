n.d(e, {
    WY: () => S,
    j$: () => T,
}),
    n(539854);
var i = n(442837),
    l = n(292556),
    s = n(972959),
    u = n(509613),
    r = n(460181),
    a = n(292959),
    o = n(313789),
    c = n(388032);
let d = (0, s.H)(() => ({ currentPlayingSound: null }));
function S() {
    let t = d.getField("currentPlayingSound");
    null == t || t.stop(), d.setState({ currentPlayingSound: null });
}
function T(t) {
    return (0, u.qs)("".concat(o.n.SOUNDS_LIST_ITEM_PREFIX).concat(t.sound), {
        useTitle: t.useTitle,
        useSubtitle: () =>
            c.intl.format(c.t.OOiGCM, {
                onClick: () =>
                    (function (t) {
                        let e = d.getField("currentPlayingSound");
                        null == e || e.stop();
                        let n = (0, r.GN)(t);
                        d.setState({ currentPlayingSound: n });
                    })(t.sound),
            }),
        useValue: () => {
            var e;
            let n = (0, i.e7)([a.Z], () => a.Z.isSoundDisabled(t.sound)),
                l = null == (e = t.useDisabled) ? void 0 : e.call(t);
            return !n && !l;
        },
        setValue: (e) => {
            let n = a.Z.getDisabledSounds().filter((e) => e !== t.sound);
            e || n.push(t.sound), l.default.setDisabledSounds(n);
        },
        useDisabled: () => {
            var e;
            let n = null == (e = t.useDisabled) ? void 0 : e.call(t),
                l = (0, i.e7)([a.Z], () => a.Z.getDisableAllSounds());
            return n || l;
        },
        useDisabledMessage: t.useDisabledMessage,
    });
}
