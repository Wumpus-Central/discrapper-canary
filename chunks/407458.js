n.d(e, { j: () => c }), n(539854);
var i = n(442837),
    r = n(292556),
    l = n(509613),
    s = n(292959),
    u = n(313789),
    a = n(299426),
    o = n(388032);
function c(t) {
    return (0, l.qs)("".concat(u.n.SOUNDS_LIST_ITEM_PREFIX).concat(t.sound), {
        useTitle: t.useLabel,
        useSubtitle: () => {
            let { handlePreviewSound: e } = (0, a.j)();
            return o.intl.format(o.t.OOiGCM, { onClick: () => e(t.sound) });
        },
        useValue: () => {
            var e;
            let n = (0, i.e7)([s.Z], () => s.Z.isSoundDisabled(t.sound)),
                r = null == (e = t.useDisabled) ? void 0 : e.call(t);
            return !n && !r;
        },
        setValue: (e) => {
            let n = s.Z.getDisabledSounds().filter((e) => e !== t.sound);
            e || n.push(t.sound), r.default.setDisabledSounds(n);
        },
        useDisabled: () => {
            var e;
            let n = null == (e = t.useDisabled) ? void 0 : e.call(t),
                r = (0, i.e7)([s.Z], () => s.Z.getDisableAllSounds());
            return n || r;
        },
        useDisabledMessage: t.useDisabledMessage,
    });
}
