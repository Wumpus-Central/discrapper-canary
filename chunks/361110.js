n.d(t, { f: () => i }), n(388685);
var r = n(73800),
    l = n(979554);
let i = (e) => {
    let [t, n] = (0, r.useState)(null);
    return {
        previewingVariantIndex: t,
        handleEntering: (0, r.useCallback)(
            (t) => {
                (null == e ? void 0 : e.type) === l.Z.VARIANTS_GROUP && n(t);
            },
            [null == e ? void 0 : e.type]
        ),
        handleLeaving: (0, r.useCallback)(() => {
            (null == e ? void 0 : e.type) === l.Z.VARIANTS_GROUP && n(null);
        }, [null == e ? void 0 : e.type])
    };
};
