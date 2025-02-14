n.d(t, { f: () => i }), n(47120);
var l = n(192379),
    r = n(979554);
let i = (e) => {
    let [t, n] = (0, l.useState)(null);
    return {
        previewingVariantIndex: t,
        handleEntering: (0, l.useCallback)(
            (t) => {
                (null == e ? void 0 : e.type) === r.Z.VARIANTS_GROUP && n(t);
            },
            [null == e ? void 0 : e.type]
        ),
        handleLeaving: (0, l.useCallback)(() => {
            (null == e ? void 0 : e.type) === r.Z.VARIANTS_GROUP && n(null);
        }, [null == e ? void 0 : e.type])
    };
};
