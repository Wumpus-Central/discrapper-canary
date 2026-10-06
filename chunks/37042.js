function i(e) {
    let t = {};
    return (
        e.launch?.customId != null && (t.custom_id = e.launch.customId),
        e.launch?.referrerId != null && (t.referrer_id = e.launch.referrerId),
        t
    );
}
n.d(t, { A: () => i });
