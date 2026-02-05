"use strict";
function r(e) {
    return {
        id: e.id,
        name: e.name,
        regionId: e.region_id,
        regionName: e.region_name,
        planId: e.sku_id,
        planName: e.plan_name,
        onlineConnectionsCount: e.players_count ?? 0,
        maxConnectionsCount: e.max_players_count,
        serverIP: e.ip,
        port: e.port,
        entitlementId: e.entitlement_id,
        providerType: e.provider_type,
        gameServerPanelUrl: e.provider_url,
        status: e.status,
        gameId: e.game_id,
        gameConfig: e.game_config,
    };
}
n.d(t, { A: () => r });
