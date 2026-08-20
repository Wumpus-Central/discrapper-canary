i.d(n, { _: () => e });
function e(t) {
    if (null == t || null == t.party || null == t.party.size || t.party.size.length < 2)
        return { partySize: -1, maxPartySize: -1 };
    let [n, i] = t.party.size;
    return { partySize: n, maxPartySize: i };
}
