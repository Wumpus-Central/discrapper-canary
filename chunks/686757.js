var i = n(882035),
    r = n(613412),
    a = n(121894);
let s = Object.freeze({ debugTrackedData: null, impressions: [] }),
    l = (0, i.h)((e) => s);
n.d(
    t,
    {},
    {
        SD: l,
        Vm: function (e) {
            (0, a.r)(() => {
                l.setState((t) => ({ impressions: [...t.impressions, e] }));
            });
        },
        eE: function (e, t) {
            (0, a.r)(() => {
                l.setState(() => ({ debugTrackedData: { name: e, ...t } }));
            });
        },
        g$: function () {
            let e = {};
            return (
                l.getState().impressions.forEach((t) => {
                    t.type === r.ImpressionTypes.PAGE ? (e.page = t.name) : (e.section = t.name);
                }),
                e
            );
        },
        u5: function (e) {
            (0, a.r)(() => {
                l.setState((t) => ({ impressions: t.impressions.filter((t) => t.sequenceId !== e.sequenceId) }));
            });
        },
        uJ: function () {
            return l.getState().impressions;
        },
    },
);
