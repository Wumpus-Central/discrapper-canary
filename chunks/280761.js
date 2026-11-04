var n = t(855986),
    l = t(918467),
    i = t(288106),
    s = t(682901);
t.d(
    r,
    {},
    {
        U: function () {
            let e = (0, n.bG)([l.A], () => l.A.getPromotionsForApplication(s.tv));
            return e?.find((e) => {
                var r;
                return (
                    "1554541212982050847" === e.id &&
                    null != (r = e.rewardStatus) &&
                    (r === i.GM.EARNED || r === i.GM.CONSUMED)
                );
            });
        },
    },
);
