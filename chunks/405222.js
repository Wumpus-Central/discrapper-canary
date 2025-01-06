t.d(n, {
    x: function () {
        return i;
    }
});
function i(e) {
    return {
        id: e.id,
        name: e.name,
        description: e.description,
        icon: e.icon_hash,
        onlineCount: e.online_count,
        memberCount: e.member_count,
        brandColorPrimary: e.brand_color_primary
    };
}
