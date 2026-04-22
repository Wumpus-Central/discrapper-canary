l.d(t, { T: () => E });
var n = l(627968);
l(64700);
var i = l(503698),
    a = l.n(i),
    r = l(311907),
    s = l(834730),
    o = l(691540),
    u = l(857250),
    c = l(97483),
    d = l(565645),
    h = l(71393),
    m = l(927813),
    g = l(985018),
    x = l(780999),
    f = l(861173);
let j = 6 * m.A.Millis.SECOND;
function v(e) {
    let { emoji: t, guildId: l } = e,
        i = (0, r.bG)([h.A], () => h.A.getGuild(l)?.name);
    return (0, n.jsxs)("div", {
        className: a()(f.oR, x.o),
        children: [
            (0, n.jsx)(d.A, { emojiId: t.id, size: "default" }),
            (0, n.jsx)(s.E, {
                variant: "text-md/normal",
                color: "text-muted",
                children: g.intl.format(g.t.BaxFf8, {
                    emojiName: t.name,
                    emojiNameHook: (e, t) =>
                        (0, n.jsx)(
                            s.E,
                            { variant: "text-md/semibold", color: "text-strong", tag: "strong", children: e },
                            t,
                        ),
                    guildName: i,
                    guildNameHook: (e, t) =>
                        (0, n.jsx)(
                            s.E,
                            { variant: "text-md/semibold", color: "text-strong", tag: "strong", children: e },
                            t,
                        ),
                }),
            }),
        ],
    });
}
function E(e) {
    let { emoji: t, guildId: l } = e;
    (0, o.P0)(
        (0, u.o)("", c.Ck.CUSTOM, {
            position: c.xJ.TOP,
            component: (0, n.jsx)(v, { emoji: t, guildId: l }),
            duration: j,
        }),
    );
}
