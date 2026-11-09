var a,
    i = t(582128),
    l = t(536637),
    u = t.n(l),
    d = t(855986),
    r = t(308528),
    s = t(362280),
    c = t(33524),
    h = t(95701),
    g = t(46653),
    o = t(734057),
    p = t(652215),
    I = t(792996),
    f = (((a = {})[(a.LONG = 0)] = "LONG"), (a[(a.SHORT = 1)] = "SHORT"), a);
t.d(
    n,
    {},
    {
        Ce: function (e) {
            let { dueAt: n, now: t, type: a } = e;
            if (null == n) return { string: "", isOverdue: !1 };
            let i = 0 === a ? I.t.TjNWNF : I.t.H4gnX9,
                l = 0 === a ? I.t.haia16 : I.t["Uq7Y+7"],
                d = t > n;
            return {
                dueInText: I.intl.formatToPlainString(d ? l : i, {
                    duration: u()
                        .duration(n.getTime() - t.getTime(), "millisecond")
                        .humanize(),
                }),
                isOverdue: d,
            };
        },
        kh: f,
        le: async function (e, n) {
            if (null == e.saveData.guildId && null == o.A.getChannel(e.saveData.channelId))
                try {
                    let n = await r.A.fetchChannel(e.saveData.channelId);
                    if (null == n.recipients || n.recipients.length > 1) return;
                    await r.A.ensurePrivateChannel(n.recipients.map((e) => e.id));
                } catch (e) {}
            (0, s.A)(p.BVt.CHANNEL(n?.getGuildId(), e.saveData.channelId, e.saveData.messageId), {
                openChannel: !0,
                navigationReplace: !!(0, c.uj)() && void 0,
            });
        },
        vr: function (e) {
            let n = (0, d.bG)([o.A], () => o.A.getChannel(e.saveData.channelId)),
                t = (0, d.bG)([g.default], () => g.default.getId());
            return i.useMemo(() => {
                if (null != n) return n;
                let { message: a, saveData: i } = e;
                if (null != a)
                    return null == i.guildId && a.author.id !== t
                        ? new h.cq({
                              id: i.channelId,
                              type: p.rbe.DM,
                              name: "",
                              guild_id: null,
                              recipients: [a.author.id],
                          })
                        : new h.jb({
                              id: i.channelId,
                              guild_id: i.guildId,
                              type: p.rbe.UNKNOWN,
                              name: I.intl.string(I.t.J90oLW),
                          });
            }, [n, e, t]);
        },
    },
);
