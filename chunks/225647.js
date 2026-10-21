l.d(t, { A: () => n });
let a = new Map(
    ["DLC", "XP", "VIP", "V-Bucks"].flatMap((e) => [
        [e.toLowerCase(), e],
        [e.replaceAll("-", "").toLowerCase(), e],
    ]),
);
function n(e) {
    if (null == e) return e;
    let t = e === e.toUpperCase();
    return e.replace(/[\p{L}\p{M}\p{N}_]+(?:['\u2019-][\p{L}\p{M}\p{N}_]+)*/gu, (e) => {
        let l = a.get(e.toLowerCase());
        return null != l
            ? l
            : e
                  .split("-")
                  .map(
                      (e) =>
                          a.get(e.toLowerCase()) ??
                          (t
                              ? e.toLowerCase().replace(/(?:^|[^\p{L}\p{M}'\u2019])\p{L}/gu, (e) => e.toUpperCase())
                              : e),
                  )
                  .join("-");
    });
}
