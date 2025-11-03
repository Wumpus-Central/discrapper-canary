n.d(e, { j: () => c }), n(539854);
var i = n(442837),
    l = n(292556),
    r = n(509613),
    u = n(292959),
    s = n(313789),
    a = n(299426),
    o = n(388032);
function c(t) {
    return (0, r.qs)("".concat(s.n.SOUNDS_LIST_ITEM_PREFIX).concat(t.sound), {
        useTitle: t.useLabel,
        useSubtitle: () => {
            let { handlePreviewSound: e } = (0, a.j)();
            return o.intl.format(o.t.OOiGCM, { onClick: () => e(t.sound) });
        },
        useValue: () => {
            var e;
            let n = (0, i.e7)([u.Z], () => u.Z.isSoundDisabled(t.sound)),
                l = null == (e = t.useDisabled) ? void 0 : e.call(t);
            return !n && !l;
        },
        setValue: (e) => {
            let n = u.Z.getDisabledSounds().filter((e) => e !== t.sound);
            e || n.push(t.sound), l.default.setDisabledSounds(n);
        },
        useDisabled: () => {
            var e;
            let n = null == (e = t.useDisabled) ? void 0 : e.call(t),
                l = (0, i.e7)([u.Z], () => u.Z.getDisableAllSounds());
            return n || l;
        },
        useDisabledMessage: t.useDisabledMessage,
    });
}
