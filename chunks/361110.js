n.d(t, { f: () => r }), n(388685);
var a = n(473749),
    l = n(979554);
let r = (e) => {
    let [t, n] = (0, a.useState)(null);
    return {
        previewingVariantIndex: t,
        handleEntering: (0, a.useCallback)(
            (t) => {
                (null == e ? void 0 : e.type) === l.Z.VARIANTS_GROUP && n(t);
            },
            [null == e ? void 0 : e.type],
        ),
        handleLeaving: (0, a.useCallback)(() => {
            (null == e ? void 0 : e.type) === l.Z.VARIANTS_GROUP && n(null);
        }, [null == e ? void 0 : e.type]),
    };
};
