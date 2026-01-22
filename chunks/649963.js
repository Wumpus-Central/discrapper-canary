n.d(t, {
    BB: () => w,
    Go: () => D,
    Jf: () => x,
    ao: () => R,
    et: () => L,
    on: () => P,
    qN: () => S,
});
var r = n(562465),
    i = n(582754),
    a = n(73153),
    s = n(157559),
    o = n(58149),
    l = n(505527),
    c = n(867455),
    u = n(961350),
    d = n(734057),
    f = n(320501),
    p = n(954571),
    _ = n(203982),
    h = n(927813),
    m = n(690521),
    g = n(300703),
    E = n(652215),
    b = n(985018);

function y(e, t, n) {
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

function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}

function A(e, t) {
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

function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var S = (function (e) {
    return (
        (e.MESSAGE = "Message"),
        (e.FORUM_TOOLBAR = "Forum Toolbar"),
        (e.MOBILE_MEDIA_VIEWER = "Mobile Media Viewer"),
        (e.MESSAGE_HOVER_BAR = "Message Hover Bar"),
        (e.MESSAGE_INLINE_BUTTON = "Message Inline Button"),
        (e.MESSAGE_CONTEXT_MENU = "Message Context Menu"),
        (e.MESSAGE_REACTION_PICKER = "Message Reaction Picker"),
        (e.MESSAGE_SHORTCUT = "Message Shortcut"),
        (e.DOUBLE_TAP = "Double Tap"),
        e
    );
})({});

function I(e, t, n) {
    let { headers: r, status: i, body: a } = e;
    if (429 === i) {
        if (n.isRetry) return !0;
        let e = parseInt(r["retry-after"]);
        return isNaN(e) || setTimeout(t, e * h.A.Millis.SECOND), !1;
    }
    if (403 === i)
        switch (a && a.code) {
            case E.t02.TOO_MANY_REACTIONS:
                s.A.show({
                    title: b.intl.string(b.t.lFddsR),
                    body: b.intl.string(b.t.h27eIm),
                    confirmText: b.intl.string(b.t.BddRzS),
                });
                break;
            case E.t02.REACTION_BLOCKED:
                _._.dispatch(E.jej.SHAKE_APP, {
                    duration: 200,
                    intensity: 2,
                });
        }
    else if (!n.isRetry) return t(), !1;
    return !0;
}

function T(e, t, n, r, i) {
    var s, o;
    a.h.dispatch({
        type: e,
        channelId: t,
        messageId: n,
        userId: null != (s = null == i ? void 0 : i.userId) ? s : u.default.getId(),
        emoji: r,
        optimistic: !0,
        colors: null != (o = null == i ? void 0 : i.colors) ? o : [],
        reactionType: (null == i ? void 0 : i.burst) ? l.v.BURST : l.v.NORMAL,
    });
}

function C(e) {
    let { channelId: t, messageId: n, emoji: r, userId: i, useTypeEndpoint: a = !1, type: s = l.v.NORMAL } = e,
        o = null != r.id ? "".concat(r.name, ":").concat(r.id) : r.name;
    return null == i
        ? E.Rsh.REACTIONS(t, n, o)
        : a
          ? E.Rsh.REACTION_WITH_TYPE(t, n, o, i, s)
          : E.Rsh.REACTION(t, n, o, i);
}

function N(e, t, n) {
    var r;
    let i = null != (r = n.id) ? r : n.name;
    return E.Rsh.POLL_ANSWER_VOTERS(e, t, i);
}
async function R(e) {
    let { channelId: t, messageId: n, emoji: i, limit: s, after: o, type: c } = e,
        u =
            c === l.v.VOTE
                ? N(t, n, i)
                : C({
                      channelId: t,
                      messageId: n,
                      emoji: i,
                  }),
        d = await r.Bo.get({
            url: u,
            query: {
                limit: s,
                after: o,
                type: c,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        }),
        f = c === l.v.VOTE ? d.body.users : d.body;
    return (
        a.h.dispatch({
            type: "MESSAGE_REACTION_ADD_USERS",
            channelId: t,
            messageId: n,
            users: f,
            emoji: i,
            reactionType: c,
        }),
        f
    );
}
async function w(e, t, n) {
    let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "Message",
        u = arguments.length > 4 ? arguments[4] : void 0,
        f = null != u && !!u.burst,
        _ = null != u && !!u.isRetry;
    if (!_ && M(e, t, n, f))
        return void s.A.show({
            title: b.intl.string(b.t["uaUU/g"]),
            body: b.intl.string(b.t.psMorl),
            confirmText: b.intl.string(b.t["NX+WJN"]),
        });
    let h = await j(n, f);
    return (
        T("MESSAGE_REACTION_ADD", e, t, n, {
            burst: f,
            colors: h,
        }),
        await c.A.unarchiveThreadIfNecessary(e),
        r.Bo.put({
            url: C({
                channelId: e,
                messageId: t,
                emoji: n,
                userId: "@me",
            }),
            query: {
                location: a,
                type: f ? l.v.BURST : l.v.NORMAL,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
            .then(() => {
                if ("Message Shortcut" === a) {
                    var r;
                    let i = d.A.getChannel(e);
                    p.default.track(
                        E.HAw.MESSAGE_SHORTCUT_ACTION_SENT,
                        O(
                            {
                                channel_id: e,
                                guild_id: null == i ? void 0 : i.guild_id,
                                original_message_id: t,
                                emoji_id: null != (r = n.id) ? r : n.name,
                                action: "react",
                            },
                            (0, o.H$)(null == i ? void 0 : i.guild_id),
                            (0, o.dI)(i),
                        ),
                    );
                }
                f
                    ? (i.OR.announce(
                          b.intl.formatToPlainString(b.t["RJlG+R"], {
                              name: n.name,
                          }),
                      ),
                      g.A.triggerFullscreenAnimation({
                          channelId: e,
                          messageId: t,
                          emoji: v(O({}, n), {
                              animated: !1,
                          }),
                      }))
                    : i.OR.announce(
                          b.intl.formatToPlainString(b.t.ol4acF, {
                              name: n.name,
                          }),
                      );
            })
            .catch((r) => {
                I(
                    r,
                    () =>
                        w(e, t, n, a, {
                            burst: f,
                            isRetry: !0,
                        }),
                    {
                        isRetry: _,
                    },
                ) &&
                    (T("MESSAGE_REACTION_REMOVE", e, t, n, {
                        burst: f,
                    }),
                    f
                        ? i.OR.announce(
                              b.intl.formatToPlainString(b.t.fJeu87, {
                                  name: n.name,
                              }),
                          )
                        : i.OR.announce(
                              b.intl.formatToPlainString(b.t["UUn5V+"], {
                                  name: n.name,
                              }),
                          ));
            })
    );
}

function P(e) {
    let { channelId: t, messageId: n, emoji: r, key: i } = e;
    a.h.dispatch({
        type: "BURST_REACTION_EFFECT_PLAY",
        channelId: t,
        messageId: n,
        emoji: r,
        key: i,
    });
}
async function D(e, t, n) {
    let i = null != n && !!n.isRetry;
    await c.A.unarchiveThreadIfNecessary(e),
        r.Bo.del({
            url: E.Rsh.REMOVE_REACTIONS(e, t),
            oldFormErrors: !0,
            rejectWithError: !1,
        }).catch((n) => {
            I(
                n,
                () =>
                    D(e, t, {
                        isRetry: !0,
                    }),
                {
                    isRetry: i,
                },
            );
        });
}
async function x(e, t, n, i) {
    let a = null != i && !!i.isRetry;
    await c.A.unarchiveThreadIfNecessary(e);
    let s = null === n.id ? n.name : "".concat(n.name, ":").concat(n.id);
    r.Bo.del({
        url: E.Rsh.REMOVE_EMOJI_REACTIONS(e, t, s),
        oldFormErrors: !0,
        rejectWithError: !1,
    }).catch((r) => {
        I(
            r,
            () =>
                x(e, t, n, {
                    isRetry: !0,
                }),
            {
                isRetry: a,
            },
        );
    });
}
async function L(e) {
    let { channelId: t, messageId: n, emoji: a, location: s = "Message", userId: o, options: u } = e,
        d = null != u && !!u.burst,
        f = null != u && !!u.isRetry;
    T("MESSAGE_REACTION_REMOVE", t, n, a, {
        userId: o,
        burst: d,
    }),
        await c.A.unarchiveThreadIfNecessary(t),
        r.Bo.del({
            url: C({
                channelId: t,
                messageId: n,
                emoji: a,
                userId: null != o ? o : "@me",
                type: d ? l.v.BURST : l.v.NORMAL,
                useTypeEndpoint: !0,
            }),
            query: {
                location: s,
                burst: d,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
            .then(() => {
                (null == u ? void 0 : u.burst)
                    ? i.OR.announce(
                          b.intl.formatToPlainString(b.t["3l9f6u"], {
                              name: a.name,
                          }),
                      )
                    : i.OR.announce(
                          b.intl.formatToPlainString(b.t["DQxi+7"], {
                              name: a.name,
                          }),
                      );
            })
            .catch(async (e) => {
                if (
                    I(
                        e,
                        () =>
                            L({
                                channelId: t,
                                messageId: n,
                                emoji: a,
                                location: s,
                                userId: o,
                                options: {
                                    burst: d,
                                    isRetry: !0,
                                },
                            }),
                        {
                            isRetry: f,
                        },
                    )
                ) {
                    let e = await j(a, d);
                    T("MESSAGE_REACTION_ADD", t, n, a, {
                        userId: o,
                        burst: d,
                        colors: e,
                    }),
                        (null == u ? void 0 : u.burst)
                            ? i.OR.announce(
                                  b.intl.formatToPlainString(b.t.OamVbV, {
                                      name: a.name,
                                  }),
                              )
                            : i.OR.announce(
                                  b.intl.formatToPlainString(b.t["tD9+b+"], {
                                      name: a.name,
                                  }),
                              );
                }
            });
}
async function j(e, t) {
    let n = [];
    if (t)
        try {
            n = await (0, m.D_)(e);
        } catch (e) {}
    return n;
}

function M(e, t, n, r) {
    let i = f.A.getMessage(e, t);
    return null != i && i.userHasReactedWithEmoji(n, r);
}
