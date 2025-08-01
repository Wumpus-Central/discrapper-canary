(r.d(t, { f: () => l }), r(388685));
var n = r(73800),
    a = r(979554);
let l = (e) => {
    let [t, r] = (0, n.useState)(null);
    return {
        previewingVariantIndex: t,
        handleEntering: (0, n.useCallback)(
            (t) => {
                (null == e ? void 0 : e.type) === a.Z.VARIANTS_GROUP && r(t);
            },
            [null == e ? void 0 : e.type]
        ),
        handleLeaving: (0, n.useCallback)(() => {
            (null == e ? void 0 : e.type) === a.Z.VARIANTS_GROUP && r(null);
        }, [null == e ? void 0 : e.type])
    };
};
