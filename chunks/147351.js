n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(732955),
    s = n(843472),
    o = n(355622),
    c = n(148355),
    d = n(406704),
    u = n(696451),
    m = n(576705),
    _ = n(287809),
    A = n(954571),
    h = n(661191),
    f = n(460350),
    E = n(652215),
    g = n(874377);
function p(e) {
    let { assets: t, currentUser: n, message: i } = e,
        l = (h.default.extractTimestamp(n.id) + h.default.extractTimestamp(i.id)) % t.length;
    return t[l];
}
function x(e) {
    let { currentUser: t, channel: n, message: a, buttonLabels: d, stickers: u, event: m, eventProperties: _ } = e,
        h = l.useMemo(() => p({ assets: u, currentUser: t, message: a }), [u, t, a]),
        E = l.useMemo(() => p({ assets: d, currentUser: t, message: a }), [d, t, a]),
        g = l.useCallback(async () => {
            let { valid: e } = await (0, f.i)({ type: o.oU.FORM, content: "", channel: n });
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
                })({ channel: n, message: a, sticker: h }),
                (function (e) {
                    let { sticker: t, event: n, eventProperties: i } = e;
                    null != n && A.default.track(n, { ...i, sticker_id: t.id });
                })({ sticker: h, event: m, eventProperties: _ }));
        }, [n, a, h, m, _]);
    return (0, i.jsx)(r.$nd, {
        icon: { type: "sticker", asset: h, component: c.A },
        text: E,
        onClick: g,
        variant: "secondary",
    });
}
function C(e) {
    let { channel: t, message: n, buttonLabels: l, stickers: r, event: s, eventProperties: o } = e,
        c = _.default.getCurrentUser(),
        A = (function (e) {
            let { channel: t, message: n, currentUser: i } = e;
            return (0, a.bG)([m.A, u.Ay], () => {
                let e = t.guild_id;
                if (null == i || null == e) return !1;
                let l = (0, d.UJ)(t),
                    a = m.A.can(E.xBc.SEND_MESSAGES, t),
                    r = u.Ay.getMember(e, i.id)?.isPending,
                    s = n.author.bot;
                return a && !l && !r && !s;
            });
        })({ channel: t, message: n, currentUser: c });
    return null != c && A
        ? (0, i.jsx)("div", {
              className: g.S,
              children: (0, i.jsx)(x, {
                  currentUser: c,
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
