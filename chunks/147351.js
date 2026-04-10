"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    r = n(64700),
    s = n(311907),
    l = n(732955),
    a = n(843472),
    c = n(355622),
    o = n(148355),
    u = n(406704),
    d = n(696451),
    _ = n(576705),
    E = n(287809),
    A = n(954571),
    m = n(661191),
    I = n(460350),
    T = n(652215),
    g = n(705886);
function N(e) {
    let { assets: t, currentUser: n, message: i } = e,
        r = (m.default.extractTimestamp(n.id) + m.default.extractTimestamp(i.id)) % t.length;
    return t[r];
}
function f(e) {
    let { currentUser: t, channel: n, message: s, buttonLabels: u, stickers: d, event: _, eventProperties: E } = e,
        m = r.useMemo(() => N({ assets: d, currentUser: t, message: s }), [d, t, s]),
        T = r.useMemo(() => N({ assets: u, currentUser: t, message: s }), [u, t, s]),
        g = r.useCallback(async () => {
            let { valid: e } = await (0, I.i)({ type: c.oU.FORM, content: "", channel: n });
            e &&
                (!(function (e) {
                    let { channel: t, message: n, sticker: i } = e;
                    a.A.sendGreetMessage(
                        t.id,
                        i.id,
                        a.A.getSendMessageOptionsForReply({
                            channel: t,
                            message: n,
                            shouldMention: !0,
                            showMentionToggle: !0,
                        }),
                    );
                })({ channel: n, message: s, sticker: m }),
                (function (e) {
                    let { sticker: t, event: n, eventProperties: i } = e;
                    null != n && A.default.track(n, { ...i, sticker_id: t.id });
                })({ sticker: m, event: _, eventProperties: E }));
        }, [n, s, m, _, E]);
    return (0, i.jsx)(l.$nd, {
        icon: { type: "sticker", asset: m, component: o.A },
        text: T,
        onClick: g,
        variant: "secondary",
    });
}
function p(e) {
    let { channel: t, message: n, buttonLabels: r, stickers: l, event: a, eventProperties: c } = e,
        o = E.default.getCurrentUser(),
        A = (function (e) {
            let { channel: t, message: n, currentUser: i } = e;
            return (0, s.bG)([_.A, d.Ay], () => {
                let e = t.guild_id;
                if (null == i || null == e) return !1;
                let r = (0, u.UJ)(t),
                    s = _.A.can(T.xBc.SEND_MESSAGES, t),
                    l = d.Ay.getMember(e, i.id)?.isPending,
                    a = n.author.bot;
                return s && !r && !l && !a;
            });
        })({ channel: t, message: n, currentUser: o });
    return null != o && A
        ? (0, i.jsx)("div", {
              className: g.S,
              children: (0, i.jsx)(f, {
                  currentUser: o,
                  channel: t,
                  message: n,
                  buttonLabels: r,
                  stickers: l,
                  event: a,
                  eventProperties: c,
              }),
          })
        : null;
}
