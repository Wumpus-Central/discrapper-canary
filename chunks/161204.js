n.d(t, { u: () => l });
var i = n(701952);
function l(e) {
    let t = e.summary_map?.entries.find((e) => "TOPIC_EXTRACTION_SUMMARY" === e.summary_type);
    if (null != t) {
        let e = (0, i.i)(t.content_json);
        if (e?.title != null && "" !== e.title) return e.title;
    }
    return e.keywords.length > 0 ? e.keywords.slice(0, 3).join(", ") : `${e.message_count} messages`;
}
