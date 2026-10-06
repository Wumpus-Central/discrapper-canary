n.d(i, { _: () => e });
function e(t) {
    if (null == t || null == t.party || null == t.party.size || t.party.size.length < 2)
        return { partySize: -1, maxPartySize: -1 };
    let [i, n] = t.party.size;
    return { partySize: i, maxPartySize: n };
}
