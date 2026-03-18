"use strict";
n.d(t, { A: () => h });
var i = n(627968),
    s = n(64700),
    l = n(417597),
    r = n(397927),
    a = n(219504),
    o = n(374084),
    d = n(199940),
    c = n(132514),
    u = n(520761),
    m = n(985018),
    g = n(659233);
let x = [],
    h = function (e) {
        let { guildId: t } = e,
            h = (0, l.yK)([c.A], () => c.A.getSettings().resourceChannels ?? x),
            _ = s.useMemo(() => h.map((e) => ({ ...e, id: e.channelId })), [h]),
            { handleDragStart: p, handleDragReset: A, handleDragComplete: f } = (0, a.A)(_, d.WA),
            j = s.useCallback(
                (e, n) => {
                    let i = c.A.getSettings();
                    null != i &&
                        ((0, d.px)(e),
                        (0, d.W5)(t, i).then(() => {
                            (0, d.E0)(t, e.channelId, n);
                        }));
                },
                [t],
            ),
            N = s.useCallback(() => {
                if (null != t)
                    return (0, r.mMO)(async () => {
                        let { default: e } = await n.e("36354").then(n.bind(n, 983161));
                        return (n) => (0, i.jsx)(e, { ...n, guildId: t, onSave: d.px, onIconUpload: j });
                    });
            }, [t, j]);
        return (0, i.jsxs)("div", {
            className: g.C5,
            children: [
                h.map((e, n) =>
                    (0, i.jsx)(
                        u.A,
                        { guildId: t, resourceChannel: e, index: n, onDragStart: p, onDragReset: A, onDragComplete: f },
                        e.channelId,
                    ),
                ),
                h.length < o.CW &&
                    (0, i.jsxs)(r.DUT, {
                        className: g.Bw,
                        onClick: N,
                        children: [
                            (0, i.jsx)(r.U1e, { size: "xs", color: "currentColor" }),
                            (0, i.jsx)(r.Text, {
                                variant: "text-md/normal",
                                color: "none",
                                children: m.intl.string(m.t["w9/qGY"]),
                            }),
                        ],
                    }),
            ],
        });
    };
