t.d(n, { f: () => i }), t(388685);
var r = t(647438),
    l = t(979554);
let i = (e) => {
    let [n, t] = (0, r.useState)(null);
    return {
        previewingVariantIndex: n,
        handleEntering: (0, r.useCallback)(
            (n) => {
                (null == e ? void 0 : e.type) === l.Z.VARIANTS_GROUP && t(n);
            },
            [null == e ? void 0 : e.type],
        ),
        handleLeaving: (0, r.useCallback)(() => {
            (null == e ? void 0 : e.type) === l.Z.VARIANTS_GROUP && t(null);
        }, [null == e ? void 0 : e.type]),
    };
};
