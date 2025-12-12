n.d(t, {
    $v: () => u,
    _0: () => c,
    dQ: () => l,
    wR: () => d,
    yy: () => f,
});
var r = n(594174),
    i = n(5192),
    o = n(981631),
    a = n(388032),
    s = n(53229);
function l(e, t, n) {
    switch (t) {
        case o.mFx.LISTEN:
            return a.intl.formatToPlainString(a.t["/8czH4"], { name: e });
        case o.mFx.WATCH:
            return a.intl.formatToPlainString(a.t.BBJXVk, { name: e });
        case o.mFx.JOIN:
            return n ? void 0 : a.intl.string(a.t.pkq6Vq);
        case o.mFx.STREAM_REQUEST:
            return a.intl.string(s.default.DKHhec);
        case o.mFx.JOIN_REQUEST:
        default:
            return a.intl.string(a.t.Ckxb6j);
    }
}
function c(e, t, n) {
    return e.author.id === n
        ? a.intl.string(s.default["8B3U5O"])
        : a.intl.formatToPlainString(s.default["d/qbC0"], { username: (0, i.oY)(t.guild_id, t.id, e.author) });
}
function u(e, t, n, i, o) {
    if (e.author.id === i) {
        if (n.isPrivate()) {
            let e = r.default.getUser(n.getRecipientId());
            if (null != e)
                return o
                    ? a.intl.formatToPlainString(a.t.JddpN2, {
                          username: e.globalName,
                          appName: t,
                      })
                    : a.intl.formatToPlainString(a.t.gYVkSW, {
                          username: e.globalName,
                          appName: t,
                      });
        }
        return o
            ? a.intl.formatToPlainString(a.t["2N1kNS"], { appName: t })
            : a.intl.formatToPlainString(a.t.IA6uDV, { appName: t });
    }
    return o
        ? a.intl.formatToPlainString(a.t.XE8axA, {
              username: e.author.globalName,
              appName: t,
          })
        : a.intl.formatToPlainString(a.t.hgcjOn, {
              username: e.author.globalName,
              appName: t,
          });
}
function d(e, t, n, r, i) {
    var s;
    switch (null == (s = e.activity) ? void 0 : s.type) {
        case o.mFx.LISTEN:
        case o.mFx.WATCH:
        case o.mFx.JOIN:
            return a.intl.string(i ? a.t.x1UXGR : a.t["Ek+51n"]);
        case o.mFx.STREAM_REQUEST:
            return c(e, n, r);
        case o.mFx.JOIN_REQUEST:
        default:
            return u(e, t, n, r, !0);
    }
}
function f(e) {
    let t,
        { activityActionType: n, maxPartySize: r, partySize: i } = e;
    return n === o.mFx.STREAM_REQUEST
        ? ""
        : (t =
              n === o.mFx.LISTEN
                  ? r > 0
                      ? a.intl.formatToPlainString(a.t.Zogoou, {
                            partySize: i,
                            maxPartySize: r,
                        })
                      : a.intl.formatToPlainString(a.t.UGei0j, { partySize: i })
                  : r > 0
                    ? a.intl.formatToPlainString(a.t.gLu7NU, {
                          partySize: i,
                          maxPartySize: r,
                      })
                    : a.intl.formatToPlainString(a.t["65JnWC"], { partySize: i }));
}
