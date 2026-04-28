_.d(e, { L: () => S, Te: () => I });
var E = _(627968);
_(64700);
var i = _(778712),
    n = _(192308);
_(515718);
var T = _(190460);
function I(t) {
    return "number" != typeof t ? (0, i.FT)(t) * T.Xq : t * T.Xq;
}
let S = (t) => {
    let { analyticsLocations: e, initialSelectedDecoration: i, guild: T, onClose: I, stackingBehavior: S } = t;
    (0, n.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([
                _.e("90526"),
                _.e("93816"),
                _.e("92069"),
                _.e("64877"),
                _.e("40851"),
                _.e("18573"),
                _.e("98125"),
                _.e("18441"),
                _.e("21825"),
                _.e("80527"),
                _.e("83429"),
                _.e("31825"),
                _.e("76195"),
                _.e("51243"),
                _.e("22584"),
                _.e("20683"),
                _.e("14879"),
                _.e("36126"),
                _.e("78707"),
                _.e("27773"),
                _.e("77473"),
                _.e("27462"),
                _.e("76933"),
                _.e("6721"),
            ]).then(_.bind(_, 40344));
            return (_) =>
                (0, E.jsx)(t, {
                    ..._,
                    onCloseModal: _.onClose,
                    onClose: I,
                    analyticsLocations: e,
                    initialSelectedDecoration: i,
                    guild: T,
                });
        },
        { stackingBehavior: S },
    );
};
