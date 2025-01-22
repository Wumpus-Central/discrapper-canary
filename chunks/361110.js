n.d(t, {
    f: function () {
        return l;
    }
}),
    n(47120);
var r = n(192379),
    i = n(979554);
let l = (e) => {
    let [t, n] = (0, r.useState)(null),
        l = (0, r.useCallback)(
            (t) => {
                if ((null == e ? void 0 : e.type) === i.Z.VARIANTS_GROUP) n(t);
            },
            [null == e ? void 0 : e.type]
        );
    return {
        previewingVariantIndex: t,
        handleEntering: l,
        handleLeaving: (0, r.useCallback)(() => {
            if ((null == e ? void 0 : e.type) === i.Z.VARIANTS_GROUP) n(null);
        }, [null == e ? void 0 : e.type])
    };
};
