n.d(t, {
    A: () => N,
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(732955),
    o = n(843472),
    l = n(355622),
    c = n(148355),
    u = n(406704),
    d = n(696451),
    f = n(576705),
    p = n(287809),
    _ = n(954571),
    h = n(661191),
    m = n(460350),
    g = n(652215),
    E = n(48447);

function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}

function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function v(e) {
    let { channel: t, message: n, currentUser: r } = e;
    return (0, a.bG)([f.A, d.Ay], () => {
        var e;
        let i = t.guild_id;
        if (null == r || null == i) return !1;
        let a = (0, u.UJ)(t),
            s = f.A.can(g.xBc.SEND_MESSAGES, t),
            o = null == (e = d.Ay.getMember(i, r.id)) ? void 0 : e.isPending,
            l = n.author.bot;
        return s && !a && !o && !l;
    });
}

function S(e) {
    let { assets: t, currentUser: n, message: r } = e,
        i = (h.default.extractTimestamp(n.id) + h.default.extractTimestamp(r.id)) % t.length;
    return t[i];
}

function I(e) {
    let { channel: t, message: n, sticker: r } = e,
        i = {
            channel: t,
            message: n,
            shouldMention: !0,
            showMentionToggle: !0,
        };
    o.A.sendGreetMessage(t.id, r.id, o.A.getSendMessageOptionsForReply(i));
}

function T(e) {
    let { sticker: t, event: n, eventProperties: r } = e;
    null != n &&
        _.default.track(
            n,
            A(y({}, r), {
                sticker_id: t.id,
            }),
        );
}

function C(e) {
    let { currentUser: t, channel: n, message: a, buttonLabels: o, stickers: u, event: d, eventProperties: f } = e,
        p = i.useMemo(
            () =>
                S({
                    assets: u,
                    currentUser: t,
                    message: a,
                }),
            [u, t, a],
        ),
        _ = i.useMemo(
            () =>
                S({
                    assets: o,
                    currentUser: t,
                    message: a,
                }),
            [o, t, a],
        ),
        h = i.useCallback(async () => {
            let { valid: e } = await (0, m.i)({
                type: l.oU.FORM,
                content: "",
                channel: n,
            });
            e &&
                (I({
                    channel: n,
                    message: a,
                    sticker: p,
                }),
                T({
                    sticker: p,
                    event: d,
                    eventProperties: f,
                }));
        }, [n, a, p, d, f]);
    return (0, r.jsx)(s.$nd, {
        icon: {
            type: "sticker",
            asset: p,
            component: c.A,
        },
        text: _,
        onClick: h,
        variant: "secondary",
    });
}

function N(e) {
    let { channel: t, message: n, buttonLabels: i, stickers: a, event: s, eventProperties: o } = e,
        l = p.default.getCurrentUser(),
        c = v({
            channel: t,
            message: n,
            currentUser: l,
        });
    return null != l && c
        ? (0, r.jsx)("div", {
              className: E.S,
              children: (0, r.jsx)(C, {
                  currentUser: l,
                  channel: t,
                  message: n,
                  buttonLabels: i,
                  stickers: a,
                  event: s,
                  eventProperties: o,
              }),
          })
        : null;
}
