n.d(t, { Z: () => a });
function a(e) {
    return {
        id: e.id,
        name: e.name,
        regionId: e.region_id,
        regionName: e.region_name,
        planId: e.sku_id,
        planName: e.plan_name,
        maxConnectionsCount: e.max_players_count,
        serverIP: e.ip,
        port: e.port,
        entitlementId: e.entitlement_id,
        gameId: "1",
        onlineConnectionsCount: 0,
        status: "online",
        lastUpdated: new Date().toISOString(),
        instructions: [],
        gameServerPanelUrl: "",
    };
}
