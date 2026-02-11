n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(732955),
    s = n(843472),
    o = n(355622),
    d = n(148355),
    c = n(406704),
    u = n(696451),
    m = n(576705),
    _ = n(287809),
    h = n(954571),
    p = n(661191),
    g = n(460350),
    A = n(652215),
    f = n(874377);
function x(e) {
    let { assets: t, currentUser: n, message: i } = e,
        l = (p.default.extractTimestamp(n.id) + p.default.extractTimestamp(i.id)) % t.length;
    return t[l];
}
function E(e) {
    let { currentUser: t, channel: n, message: a, buttonLabels: c, stickers: u, event: m, eventProperties: _ } = e,
        p = l.useMemo(() => x({ assets: u, currentUser: t, message: a }), [u, t, a]),
        A = l.useMemo(() => x({ assets: c, currentUser: t, message: a }), [c, t, a]),
        f = l.useCallback(async () => {
            let { valid: e } = await (0, g.i)({ type: o.oU.FORM, content: "", channel: n });
            e &&
                (!(function (e) {
                    let { channel: t, message: n, sticker: i } = e;
                    s.A.sendGreetMessage(
                        t.id,
                        i.id,
                        s.A.getSendMessageOptionsForReply({
                            channel: t,
                            message: n,
                            shouldMention: !0,
                            showMentionToggle: !0,
                        }),
                    );
                })({ channel: n, message: a, sticker: p }),
                (function (e) {
                    let { sticker: t, event: n, eventProperties: i } = e;
                    null != n && h.default.track(n, { ...i, sticker_id: t.id });
                })({ sticker: p, event: m, eventProperties: _ }));
        }, [n, a, p, m, _]);
    return (0, i.jsx)(r.$nd, {
        icon: { type: "sticker", asset: p, component: d.A },
        text: A,
        onClick: f,
        variant: "secondary",
    });
}
function C(e) {
    let { channel: t, message: n, buttonLabels: l, stickers: r, event: s, eventProperties: o } = e,
        d = _.default.getCurrentUser(),
        h = (function (e) {
            let { channel: t, message: n, currentUser: i } = e;
            return (0, a.bG)([m.A, u.Ay], () => {
                let e = t.guild_id;
                if (null == i || null == e) return !1;
                let l = (0, c.UJ)(t),
                    a = m.A.can(A.xBc.SEND_MESSAGES, t),
                    r = u.Ay.getMember(e, i.id)?.isPending,
                    s = n.author.bot;
                return a && !l && !r && !s;
            });
        })({ channel: t, message: n, currentUser: d });
    return null != d && h
        ? (0, i.jsx)("div", {
              className: f.S,
              children: (0, i.jsx)(E, {
                  currentUser: d,
                  channel: t,
                  message: n,
                  buttonLabels: l,
                  stickers: r,
                  event: s,
                  eventProperties: o,
              }),
          })
        : null;
}
