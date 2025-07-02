n.d(t, {
    $v: () => o,
    dQ: () => a,
    wR: () => s,
    yy: () => c
});
var r = n(594174),
    i = n(981631),
    l = n(388032);
function a(e, t) {
    switch (t) {
        case i.mFx.LISTEN:
            return l.intl.formatToPlainString(l.t['/8czHx'], { name: e });
        case i.mFx.WATCH:
            return l.intl.formatToPlainString(l.t.BBJXVl, { name: e });
        case i.mFx.JOIN:
            return l.intl.string(l.t.pkq6Vl);
        case i.mFx.JOIN_REQUEST:
        default:
            return l.intl.string(l.t.Ckxb6u);
    }
}
function o(e, t, n, i, a) {
    if (e.author.id === i) {
        if (n.isPrivate()) {
            let e = r.default.getUser(n.getRecipientId());
            if (null != e)
                return a
                    ? l.intl.formatToPlainString(l.t.JddpNz, {
                          username: e.globalName,
                          appName: t.name
                      })
                    : l.intl.formatToPlainString(l.t.gYVkSU, {
                          username: e.globalName,
                          appName: t.name
                      });
        }
        return a ? l.intl.formatToPlainString(l.t['2N1kNT'], { appName: t.name }) : l.intl.formatToPlainString(l.t.IA6uDQ, { appName: t.name });
    }
    return a
        ? l.intl.formatToPlainString(l.t.XE8axM, {
              username: e.author.globalName,
              appName: t.name
          })
        : l.intl.formatToPlainString(l.t.hgcjOj, {
              username: e.author.globalName,
              appName: t.name
          });
}
function s(e, t, n, r) {
    var a;
    switch (null == (a = e.activity) ? void 0 : a.type) {
        case i.mFx.LISTEN:
        case i.mFx.WATCH:
        case i.mFx.JOIN:
            return l.intl.string(l.t.x1UXGR);
        case i.mFx.JOIN_REQUEST:
        default:
            return o(e, t, n, r, !0);
    }
}
function c(e) {
    let t,
        { activityActionType: n, maxPartySize: r, partySize: a } = e;
    return n === i.mFx.LISTEN
        ? r > 0
            ? l.intl.formatToPlainString(l.t.Zogooq, {
                  partySize: a,
                  maxPartySize: r
              })
            : l.intl.formatToPlainString(l.t.UGei0t, { partySize: a })
        : r > 0
          ? l.intl.formatToPlainString(l.t.gLu7NT, {
                partySize: a,
                maxPartySize: r
            })
          : l.intl.formatToPlainString(l.t['65JnWF'], { partySize: a });
}
