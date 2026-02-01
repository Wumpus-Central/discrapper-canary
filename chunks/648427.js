n.d(t, {
    A: () => S,
}),
    n(896048),
    n(667532);
var r,
    i = n(311907),
    l = n(73153),
    s = n(95701),
    a = n(734057),
    u = n(696451),
    o = n(71393);

function d(e, t, n) {
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
let c = [],
    h = new Set(),
    f = [],
    g = new Set();

function I(e) {
    let { channelId: t, history: n, historySet: r } = e;
    if (r.has(t)) {
        let e = n.filter((e) => e !== t);
        return (
            e.unshift(t),
            {
                didChange: !0,
                history: e,
                historySet: new Set([...e]),
            }
        );
    }
    let i = [t, ...n],
        l = new Set(r);
    return (l.add(t), i.length > 10)
        ? ((i.length = 10),
          {
              didChange: !0,
              history: i,
              historySet: new Set([...i]),
          })
        : {
              didChange: !0,
              history: i,
              historySet: l,
          };
}
class A extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        var t, n;
        this.waitFor(u.Ay, o.A, a.A),
            (c = null != (t = null == e ? void 0 : e.voiceChannelHistory) ? t : []),
            (f = null != (n = null == e ? void 0 : e.textChannelHistory) ? n : []),
            (h = new Set([...c])),
            (g = new Set([...f]));
    }
    getState() {
        return {
            voiceChannelHistory: c,
            textChannelHistory: f,
        };
    }
    getVoiceChannelHistory() {
        return c;
    }
    getTextChannelHistory() {
        return f;
    }
}
d(A, "displayName", "RecentVoiceChannelStore"),
    d(A, "persistKey", "RecentVoiceChannelStore"),
    d(A, "migrations", [
        (e) => {
            var t, n, r;
            return null == e || "object" != typeof e
                ? {
                      voiceChannelHistory: [],
                      textChannelHistory: [],
                  }
                : {
                      voiceChannelHistory:
                          null != (t = null != (n = e.voiceChannelHistory) ? n : e.channelHistory) ? t : [],
                      textChannelHistory: null != (r = e.textChannelHistory) ? r : [],
                  };
        },
    ]);
let S = new A(l.h, {
    POST_CONNECTION_OPEN: function () {
        (h = new Set([...c])), (g = new Set([...f]));
    },
    VOICE_CHANNEL_SELECT: function (e) {
        var t, n;
        let { channelId: r } = e;
        if (null == r || !(null != (t = null == (n = a.A.getChannel(r)) ? void 0 : n.isVocal()) && t)) return !1;
        let i = I({
            channelId: r,
            history: c,
            historySet: h,
        });
        return (c = i.history), (h = i.historySet), i.didChange;
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (null == t) return !1;
        let n = a.A.getChannel(t);
        if (null == n || n.isVocal() || n.isPrivate() || !(0, s.ke)(n.type)) return !1;
        let r = I({
            channelId: t,
            history: f,
            historySet: g,
        });
        return (f = r.history), (g = r.historySet), r.didChange;
    },
});
