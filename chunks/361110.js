r.d(t, { f: () => a }), r(388685);
var n = r(647438),
    l = r(979554);
let a = (e) => {
    let [t, r] = (0, n.useState)(null);
    return {
        previewingVariantIndex: t,
        handleEntering: (0, n.useCallback)(
            (t) => {
                (null == e ? void 0 : e.type) === l.Z.VARIANTS_GROUP && r(t);
            },
            [null == e ? void 0 : e.type],
        ),
        handleLeaving: (0, n.useCallback)(() => {
            (null == e ? void 0 : e.type) === l.Z.VARIANTS_GROUP && r(null);
        }, [null == e ? void 0 : e.type]),
    };
};
