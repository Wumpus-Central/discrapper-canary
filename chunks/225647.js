t.d(l, { A: () => n });
let a = new Map(
    ["DLC", "XP", "VIP", "V-Bucks"].flatMap((e) => [
        [e.toLowerCase(), e],
        [e.replaceAll("-", "").toLowerCase(), e],
    ]),
);
function n(e) {
    if (null == e) return e;
    let l = e === e.toUpperCase();
    return e.replace(/[\p{L}\p{M}\p{N}_]+(?:['\u2019-][\p{L}\p{M}\p{N}_]+)*/gu, (e) => {
        let t = a.get(e.toLowerCase());
        return null != t
            ? t
            : e
                  .split("-")
                  .map(
                      (e) =>
                          a.get(e.toLowerCase()) ??
                          (l
                              ? e.toLowerCase().replace(/(?:^|[^\p{L}\p{M}'\u2019])\p{L}/gu, (e) => e.toUpperCase())
                              : e),
                  )
                  .join("-");
    });
}
