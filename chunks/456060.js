n.d(t, {
    BE: () => d,
    SJ: () => p,
    Wf: () => c,
    YC: () => u,
    n$: () => o,
});
var r = n(287809),
    i = n(562153),
    l = n(652215),
    a = n(985018),
    s = n(426127);

function o(e, t, n) {
    switch (t) {
        case l.xL.LISTEN:
            return a.intl.formatToPlainString(a.t["/8czH4"], {
                name: e,
            });
        case l.xL.WATCH:
            return a.intl.formatToPlainString(a.t.BBJXVk, {
                name: e,
            });
        case l.xL.JOIN:
            return n ? void 0 : a.intl.string(a.t.pkq6Vq);
        case l.xL.STREAM_REQUEST:
            return a.intl.string(s.default.DKHhec);
        case l.xL.JOIN_REQUEST:
        default:
            return a.intl.string(a.t.Ckxb6j);
    }
}

function c(e, t, n) {
    return e.author.id === n
        ? a.intl.string(s.default["8B3U5O"])
        : a.intl.formatToPlainString(s.default["d/qbC0"], {
              username: (0, i.mG)(t.guild_id, t.id, e.author),
          });
}

function u(e, t, n, i, l) {
    if (e.author.id === i) {
        if (n.isPrivate()) {
            let e = r.default.getUser(n.getRecipientId());
            if (null != e)
                return l
                    ? a.intl.formatToPlainString(a.t.JddpN2, {
                          username: e.globalName,
                          appName: t,
                      })
                    : a.intl.formatToPlainString(a.t.gYVkSW, {
                          username: e.globalName,
                          appName: t,
                      });
        }
        return l
            ? a.intl.formatToPlainString(a.t["2N1kNS"], {
                  appName: t,
              })
            : a.intl.formatToPlainString(a.t.IA6uDV, {
                  appName: t,
              });
    }
    return l
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
        case l.xL.LISTEN:
        case l.xL.WATCH:
        case l.xL.JOIN:
            return a.intl.string(i ? a.t.x1UXGR : a.t["Ek+51n"]);
        case l.xL.STREAM_REQUEST:
            return c(e, n, r);
        case l.xL.JOIN_REQUEST:
        default:
            return u(e, t, n, r, !0);
    }
}

function p(e) {
    let { activityActionType: t, maxPartySize: n, partySize: r } = e;
    return t === l.xL.STREAM_REQUEST
        ? ""
        : t === l.xL.LISTEN
          ? n > 0
              ? a.intl.formatToPlainString(a.t.Zogoou, {
                    partySize: r,
                    maxPartySize: n,
                })
              : a.intl.formatToPlainString(a.t.UGei0j, {
                    partySize: r,
                })
          : n > 0
            ? a.intl.formatToPlainString(a.t.gLu7NU, {
                  partySize: r,
                  maxPartySize: n,
              })
            : a.intl.formatToPlainString(a.t["65JnWC"], {
                  partySize: r,
              });
}
