_.d(e, { L: () => S, Te: () => I });
var E = _(627968);
_(64700);
var n = _(778712),
    i = _(192308);
_(515718);
var T = _(190460);
function I(t) {
    return "number" != typeof t ? (0, n.FT)(t) * T.Xq : t * T.Xq;
}
let S = (t) => {
    let { analyticsLocations: e, initialSelectedDecoration: n, guild: T, onClose: I, stackingBehavior: S } = t;
    (0, i.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([
                _.e("83979"),
                _.e("42515"),
                _.e("17605"),
                _.e("2677"),
                _.e("18573"),
                _.e("699"),
                _.e("87306"),
                _.e("99666"),
                _.e("98125"),
                _.e("21825"),
                _.e("8892"),
                _.e("31825"),
                _.e("32079"),
                _.e("51243"),
                _.e("88740"),
                _.e("27773"),
                _.e("77473"),
                _.e("20683"),
                _.e("27462"),
                _.e("28545"),
                _.e("6721"),
            ]).then(_.bind(_, 40344));
            return (_) =>
                (0, E.jsx)(t, {
                    ..._,
                    onCloseModal: _.onClose,
                    onClose: I,
                    analyticsLocations: e,
                    initialSelectedDecoration: n,
                    guild: T,
                });
        },
        { stackingBehavior: S },
    );
};
