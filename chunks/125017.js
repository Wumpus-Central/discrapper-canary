i.d(e, { _: () => l });
function l(t) {
    if (null == t || null == t.party || null == t.party.size || t.party.size.length < 2)
        return { partySize: -1, maxPartySize: -1 };
    let [e, i] = t.party.size;
    return { partySize: e, maxPartySize: i };
}
