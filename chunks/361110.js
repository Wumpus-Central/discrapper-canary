(n.d(t, { f: () => l }), n(388685));
var r = n(73800),
    i = n(979554);
let l = (e) => {
    let [t, n] = (0, r.useState)(null);
    return {
        previewingVariantIndex: t,
        handleEntering: (0, r.useCallback)(
            (t) => {
                (null == e ? void 0 : e.type) === i.Z.VARIANTS_GROUP && n(t);
            },
            [null == e ? void 0 : e.type]
        ),
        handleLeaving: (0, r.useCallback)(() => {
            (null == e ? void 0 : e.type) === i.Z.VARIANTS_GROUP && n(null);
        }, [null == e ? void 0 : e.type])
    };
};
