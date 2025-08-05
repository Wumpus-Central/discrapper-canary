n.d(t, {
    $v: () => u,
    _0: () => c,
    dQ: () => s,
    wR: () => d,
    yy: () => p
});
var r = n(594174),
    i = n(5192),
    l = n(981631),
    a = n(388032),
    o = n(704483);
function s(e, t) {
    switch (t) {
        case l.mFx.LISTEN:
            return a.intl.formatToPlainString(a.t['/8czHx'], { name: e });
        case l.mFx.WATCH:
            return a.intl.formatToPlainString(a.t.BBJXVl, { name: e });
        case l.mFx.JOIN:
            return a.intl.string(a.t.pkq6Vl);
        case l.mFx.JOIN_REQUEST:
        default:
            return a.intl.string(a.t.Ckxb6u);
    }
}
function c(e, t, n, r, l) {
    return e.author.id === r
        ? a.intl.formatToPlainString(o.default['7pndSk'], { applicationName: t.name })
        : a.intl.formatToPlainString(l ? o.default['o/An3t'] : o.default.s7bMT0, {
              username: (0, i.oY)(n.guild_id, n.id, e.author),
              applicationName: t.name
          });
}
function u(e, t, n, i, l) {
    if (e.author.id === i) {
        if (n.isPrivate()) {
            let e = r.default.getUser(n.getRecipientId());
            if (null != e)
                return l
                    ? a.intl.formatToPlainString(a.t.JddpNz, {
                          username: e.globalName,
                          appName: t.name
                      })
                    : a.intl.formatToPlainString(a.t.gYVkSU, {
                          username: e.globalName,
                          appName: t.name
                      });
        }
        return l ? a.intl.formatToPlainString(a.t['2N1kNT'], { appName: t.name }) : a.intl.formatToPlainString(a.t.IA6uDQ, { appName: t.name });
    }
    return l
        ? a.intl.formatToPlainString(a.t.XE8axM, {
              username: e.author.globalName,
              appName: t.name
          })
        : a.intl.formatToPlainString(a.t.hgcjOj, {
              username: e.author.globalName,
              appName: t.name
          });
}
function d(e, t, n, r) {
    var i;
    switch (null == (i = e.activity) ? void 0 : i.type) {
        case l.mFx.LISTEN:
        case l.mFx.WATCH:
        case l.mFx.JOIN:
            return a.intl.string(a.t.x1UXGR);
        case l.mFx.STREAM_REQUEST:
            return c(e, t, n, r, !0);
        case l.mFx.JOIN_REQUEST:
        default:
            return u(e, t, n, r, !0);
    }
}
function p(e) {
    let t,
        { activityActionType: n, maxPartySize: r, partySize: i } = e;
    return n === l.mFx.LISTEN
        ? r > 0
            ? a.intl.formatToPlainString(a.t.Zogooq, {
                  partySize: i,
                  maxPartySize: r
              })
            : a.intl.formatToPlainString(a.t.UGei0t, { partySize: i })
        : r > 0
          ? a.intl.formatToPlainString(a.t.gLu7NT, {
                partySize: i,
                maxPartySize: r
            })
          : a.intl.formatToPlainString(a.t['65JnWF'], { partySize: i });
}
