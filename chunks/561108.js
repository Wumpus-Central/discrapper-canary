n.d(t, {
    A: () => x,
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(311907),
    a = n(397927),
    c = n(713654),
    o = n(112389),
    d = n(961973),
    u = n(487626),
    f = n(147925),
    g = n(863694),
    b = n(992711),
    m = n(985018),
    p = n(945586);

function x(e) {
    let { guild: t, scrollToQuestions: n } = e,
        i = (0, s.bG)([g.A], () => g.A.editedDefaultChannelIds),
        l = (0, u.$)(t.id, i).filter((e) => e.isCategory() || (0, o.S)(e.guild_id, e.id));
    return (0, r.jsxs)("div", {
        className: p.kL,
        children: [
            (0, r.jsx)("div", {
                className: p.wx,
                children: (0, r.jsx)(b.A, {
                    guildId: t.id,
                    scrollToQuestions: n,
                }),
            }),
            (0, r.jsxs)("div", {
                className: p.o5,
                children: [
                    (0, r.jsx)(O, {}),
                    0 === l.length && (0, r.jsx)(h, {}),
                    (0, r.jsx)(j, {
                        channels: l,
                    }),
                ],
            }),
        ],
    });
}

function h() {
    return (0, r.jsxs)("div", {
        className: p.p$,
        children: [
            (0, r.jsx)("div", {
                className: p.AI,
                children: (0, r.jsx)(a.N$i, {
                    size: "md",
                    color: "currentColor",
                }),
            }),
            (0, r.jsx)(a.Text, {
                className: p.HA,
                variant: "text-md/normal",
                color: "text-muted",
                children: m.intl.string(m.t.Qj6O91),
            }),
        ],
    });
}

function j(e) {
    let { channels: t } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.map((e) =>
            e.isCategory()
                ? (0, r.jsx)(
                      y,
                      {
                          label: e.name,
                      },
                      e.id,
                  )
                : (0, r.jsx)(
                      v,
                      {
                          channel: e,
                      },
                      e.id,
                  ),
        ),
    });
}

function O() {
    return (0, r.jsx)("div", {
        className: p.yF,
    });
}

function y(e) {
    let { label: t } = e;
    return (0, r.jsxs)("div", {
        className: p.L1,
        children: [
            (0, r.jsx)(f.A, {
                className: p.OW,
                width: 12,
                height: 12,
                direction: f.A.Directions.DOWN,
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-xs/semibold",
                color: "text-muted",
                lineClamp: 1,
                children: t,
            }),
        ],
    });
}

function v(e) {
    var t;
    let { channel: n } = e,
        i = (0, d.sZ)(n),
        s = null != (t = (0, c.gU)(n)) ? t : a.N$i;
    return (0, r.jsxs)("div", {
        className: p.Ix,
        children: [
            (0, r.jsx)(s, {
                className: p.p,
                size: "xs",
                color: "currentColor",
            }),
            (0, r.jsx)(a.Text, {
                className: p.HA,
                variant: "text-md/normal",
                color: "text-muted",
                lineClamp: 1,
                children: n.name,
            }),
            (0, r.jsx)("div", {
                className: l()({
                    [p.al]: i,
                }),
            }),
        ],
    });
}
