n.d(t, {
    $v: () => u,
    _0: () => c,
    dQ: () => l,
    wR: () => d,
    yy: () => f,
});
var r = n(594174),
    i = n(5192),
    a = n(981631),
    o = n(388032),
    s = n(658805);
function l(e, t) {
    switch (t) {
        case a.mFx.LISTEN:
            return o.intl.formatToPlainString(o.t["/8czHx"], { name: e });
        case a.mFx.WATCH:
            return o.intl.formatToPlainString(o.t.BBJXVl, { name: e });
        case a.mFx.JOIN:
            return o.intl.string(o.t.pkq6Vl);
        case a.mFx.JOIN_REQUEST:
        default:
            return o.intl.string(o.t.Ckxb6u);
    }
}
function c(e, t, n) {
    return e.author.id === n
        ? o.intl.string(s.default["8B3U5O"])
        : o.intl.formatToPlainString(s.default["d/qbCw"], { username: (0, i.oY)(t.guild_id, t.id, e.author) });
}
function u(e, t, n, i, a) {
    if (e.author.id === i) {
        if (n.isPrivate()) {
            let e = r.default.getUser(n.getRecipientId());
            if (null != e)
                return a
                    ? o.intl.formatToPlainString(o.t.JddpNz, {
                          username: e.globalName,
                          appName: t.name,
                      })
                    : o.intl.formatToPlainString(o.t.gYVkSU, {
                          username: e.globalName,
                          appName: t.name,
                      });
        }
        return a
            ? o.intl.formatToPlainString(o.t["2N1kNT"], { appName: t.name })
            : o.intl.formatToPlainString(o.t.IA6uDQ, { appName: t.name });
    }
    return a
        ? o.intl.formatToPlainString(o.t.XE8axM, {
              username: e.author.globalName,
              appName: t.name,
          })
        : o.intl.formatToPlainString(o.t.hgcjOj, {
              username: e.author.globalName,
              appName: t.name,
          });
}
function d(e, t, n, r) {
    var i;
    switch (null == (i = e.activity) ? void 0 : i.type) {
        case a.mFx.LISTEN:
        case a.mFx.WATCH:
        case a.mFx.JOIN:
            return o.intl.string(o.t.x1UXGR);
        case a.mFx.STREAM_REQUEST:
            return c(e, n, r);
        case a.mFx.JOIN_REQUEST:
        default:
            return u(e, t, n, r, !0);
    }
}
function f(e) {
    let t,
        { activityActionType: n, maxPartySize: r, partySize: i } = e;
    return n === a.mFx.LISTEN
        ? r > 0
            ? o.intl.formatToPlainString(o.t.Zogooq, {
                  partySize: i,
                  maxPartySize: r,
              })
            : o.intl.formatToPlainString(o.t.UGei0t, { partySize: i })
        : r > 0
          ? o.intl.formatToPlainString(o.t.gLu7NT, {
                partySize: i,
                maxPartySize: r,
            })
          : o.intl.formatToPlainString(o.t["65JnWF"], { partySize: i });
}
