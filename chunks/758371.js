n.d(t, {
    $v: () => u,
    _0: () => c,
    dQ: () => s,
    wR: () => d,
    yy: () => p,
});
var r = n(594174),
    i = n(5192),
    l = n(981631),
    o = n(388032),
    a = n(658805);
function s(e, t) {
    switch (t) {
        case l.mFx.LISTEN:
            return o.intl.formatToPlainString(o.t["/8czHx"], { name: e });
        case l.mFx.WATCH:
            return o.intl.formatToPlainString(o.t.BBJXVl, { name: e });
        case l.mFx.JOIN:
            return o.intl.string(o.t.pkq6Vl);
        case l.mFx.JOIN_REQUEST:
        default:
            return o.intl.string(o.t.Ckxb6u);
    }
}
function c(e, t, n, r, l) {
    return e.author.id === r
        ? o.intl.formatToPlainString(a.default["7pndSk"], { applicationName: t.name })
        : o.intl.formatToPlainString(l ? a.default["o/An3t"] : a.default.s7bMT0, {
              username: (0, i.oY)(n.guild_id, n.id, e.author),
              applicationName: t.name,
          });
}
function u(e, t, n, i, l) {
    if (e.author.id === i) {
        if (n.isPrivate()) {
            let e = r.default.getUser(n.getRecipientId());
            if (null != e)
                return l
                    ? o.intl.formatToPlainString(o.t.JddpNz, {
                          username: e.globalName,
                          appName: t.name,
                      })
                    : o.intl.formatToPlainString(o.t.gYVkSU, {
                          username: e.globalName,
                          appName: t.name,
                      });
        }
        return l
            ? o.intl.formatToPlainString(o.t["2N1kNT"], { appName: t.name })
            : o.intl.formatToPlainString(o.t.IA6uDQ, { appName: t.name });
    }
    return l
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
        case l.mFx.LISTEN:
        case l.mFx.WATCH:
        case l.mFx.JOIN:
            return o.intl.string(o.t.x1UXGR);
        case l.mFx.STREAM_REQUEST:
            return c(e, t, n, r, !0);
        case l.mFx.JOIN_REQUEST:
        default:
            return u(e, t, n, r, !0);
    }
}
function p(e) {
    let { activityActionType: t, maxPartySize: n, partySize: r } = e;
    return t === l.mFx.LISTEN
        ? n > 0
            ? o.intl.formatToPlainString(o.t.Zogooq, {
                  partySize: r,
                  maxPartySize: n,
              })
            : o.intl.formatToPlainString(o.t.UGei0t, { partySize: r })
        : n > 0
          ? o.intl.formatToPlainString(o.t.gLu7NT, {
                partySize: r,
                maxPartySize: n,
            })
          : o.intl.formatToPlainString(o.t["65JnWF"], { partySize: r });
}
