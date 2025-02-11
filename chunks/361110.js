n.d(t, { f: () => a }), n(47120);
var r = n(192379),
    l = n(979554);
let a = (e) => {
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
