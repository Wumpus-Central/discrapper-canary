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
    s = n(609422);
function l(e, t, n) {
    switch (t) {
        case a.mFx.LISTEN:
            return o.intl.formatToPlainString(o.t["/8czH4"], { name: e });
        case a.mFx.WATCH:
            return o.intl.formatToPlainString(o.t.BBJXVk, { name: e });
        case a.mFx.JOIN:
            return n ? void 0 : o.intl.string(o.t.pkq6Vq);
        case a.mFx.STREAM_REQUEST:
            return o.intl.string(s.default.DKHhec);
        case a.mFx.JOIN_REQUEST:
        default:
            return o.intl.string(o.t.Ckxb6j);
    }
}
function c(e, t, n) {
    return e.author.id === n
        ? o.intl.string(s.default["8B3U5O"])
        : o.intl.formatToPlainString(s.default["d/qbC0"], { username: (0, i.oY)(t.guild_id, t.id, e.author) });
}
function u(e, t, n, i, a) {
    if (e.author.id === i) {
        if (n.isPrivate()) {
            let e = r.default.getUser(n.getRecipientId());
            if (null != e)
                return a
                    ? o.intl.formatToPlainString(o.t.JddpN2, {
                          username: e.globalName,
                          appName: t,
                      })
                    : o.intl.formatToPlainString(o.t.gYVkSW, {
                          username: e.globalName,
                          appName: t,
                      });
        }
        return a
            ? o.intl.formatToPlainString(o.t["2N1kNS"], { appName: t })
            : o.intl.formatToPlainString(o.t.IA6uDV, { appName: t });
    }
    return a
        ? o.intl.formatToPlainString(o.t.XE8axA, {
              username: e.author.globalName,
              appName: t,
          })
        : o.intl.formatToPlainString(o.t.hgcjOn, {
              username: e.author.globalName,
              appName: t,
          });
}
function d(e, t, n, r, i) {
    var s;
    switch (null == (s = e.activity) ? void 0 : s.type) {
        case a.mFx.LISTEN:
        case a.mFx.WATCH:
        case a.mFx.JOIN:
            return o.intl.string(i ? o.t.x1UXGR : o.t["Ek+51n"]);
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
    return n === a.mFx.STREAM_REQUEST
        ? ""
        : (t =
              n === a.mFx.LISTEN
                  ? r > 0
                      ? o.intl.formatToPlainString(o.t.Zogoou, {
                            partySize: i,
                            maxPartySize: r,
                        })
                      : o.intl.formatToPlainString(o.t.UGei0j, { partySize: i })
                  : r > 0
                    ? o.intl.formatToPlainString(o.t.gLu7NU, {
                          partySize: i,
                          maxPartySize: r,
                      })
                    : o.intl.formatToPlainString(o.t["65JnWC"], { partySize: i }));
}
