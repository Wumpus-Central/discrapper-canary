r.d(t, { f: () => i }), r(47120);
var n = r(192379),
    l = r(979554);
let i = (e) => {
    let [t, r] = (0, n.useState)(null);
    return {
        previewingVariantIndex: t,
        handleEntering: (0, n.useCallback)(
            (t) => {
                (null == e ? void 0 : e.type) === l.Z.VARIANTS_GROUP && r(t);
            },
            [null == e ? void 0 : e.type]
        ),
        handleLeaving: (0, n.useCallback)(() => {
            (null == e ? void 0 : e.type) === l.Z.VARIANTS_GROUP && r(null);
        }, [null == e ? void 0 : e.type])
    };
};
