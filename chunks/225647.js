let l = new Map(
    ["DLC", "XP", "VIP", "V-Bucks"].flatMap((e) => [
        [e.toLowerCase(), e],
        [e.replaceAll("-", "").toLowerCase(), e],
    ]),
);
a.d(
    t,
    {},
    {
        A: function (e) {
            if (null == e) return e;
            let t = e === e.toUpperCase();
            return e.replace(/[\p{L}\p{M}\p{N}_]+(?:['\u2019-][\p{L}\p{M}\p{N}_]+)*/gu, (e) => {
                let a = l.get(e.toLowerCase());
                return null != a
                    ? a
                    : e
                          .split("-")
                          .map(
                              (e) =>
                                  l.get(e.toLowerCase()) ??
                                  (t
                                      ? e
                                            .toLowerCase()
                                            .replace(/(?:^|[^\p{L}\p{M}'\u2019])\p{L}/gu, (e) => e.toUpperCase())
                                      : e),
                          )
                          .join("-");
            });
        },
    },
);
