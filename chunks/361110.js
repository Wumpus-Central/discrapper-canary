n.d(t, { f: () => i }), n(388685);
var a = n(473749),
    r = n(979554);
let i = (e) => {
    let [t, n] = (0, a.useState)(null);
    return {
        previewingVariantIndex: t,
        handleEntering: (0, a.useCallback)(
            (t) => {
                (null == e ? void 0 : e.type) === r.Z.VARIANTS_GROUP && n(t);
            },
            [null == e ? void 0 : e.type],
        ),
        handleLeaving: (0, a.useCallback)(() => {
            (null == e ? void 0 : e.type) === r.Z.VARIANTS_GROUP && n(null);
        }, [null == e ? void 0 : e.type]),
    };
};
