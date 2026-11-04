var i = d(41851),
    e = d(528239),
    c = d(761969);
let a = {
    OK: "success",
    WARN: "success",
    MANUAL_OK: "success",
    FAIL: "error",
    UNKNOWN: "error",
    MANUAL_FAIL: "error",
    MANUAL: "review",
    MANUAL_PENDING: "review",
};
d.d(
    t,
    {},
    {
        n: async (l, t) => {
            let d = `${e.t.finishStatus}${l ? `?flowId=${l}` : ""}`;
            try {
                return { ...(await i.t.get(d, { signal: t })).data, endScreenTitle: null, endScreenText: null };
            } catch (l) {
                (0, c.n)(e.t.finishStatus, l);
            }
        },
        r: async function (l) {
            try {
                return (await i.t.get(e.t.sessionTotalScoreStatus, { signal: l })).data.totalScoreStatus;
            } catch (l) {
                (0, c.n)(e.t.sessionTotalScoreStatus, l);
            }
        },
        t: function (l) {
            return (l && a[l]) ?? "error";
        },
    },
);
